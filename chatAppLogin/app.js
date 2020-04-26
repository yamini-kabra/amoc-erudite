
var express=require('express');
var app=express();
const path = require('path');
const bodyParser = require('body-parser');
var server=require('http').Server(app);
io=require('socket.io')(server);
var User  = require('./user');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

//connect to MongoDB
mongoose.connect('mongodb://localhost/amoc_erudite',  {useUnifiedTopology: true,useNewUrlParser: true});
mongoose.set('useCreateIndex', true);
var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});


//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  }));

users={};
var signup_user = null;

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/login.html'));
});
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'/signup.html'));
});

app.post('/signup',(req,res,next)=>{
    signup_user = req.body.username;
    if(req.body.email && req.body.password && req.body.username)
    {
        var userData ={
            email : req.body.email,
            username : req.body.username,
            password :  req.body.username
        }

        User.create(userData , function(err , user){
            if(err){
                return next(err);
            }
            else
            {
                res.redirect('/home');
            }
        })
    }
    
});
app.post('/',(req,res,next)=>{
    
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function (error, user) {
          if (error || !user) {
            var err = new Error('Wrong email or password.');
            err.status = 401;
            return next(err);
          } else {
            req.session.userId = user._id;
            signup_user = user.username;
            res.redirect('/home');
          }
        });
      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
});

app.get('/logout', function(req, res, next) { // left to link through front end
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });

app.get('/home',(req,res,next)=>{
    console.log(signup_user);
    User.findById(req.session.userId)
    .exec(function (error, user) {
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
            res.sendFile(path.join(__dirname,'/home.html')); 
        }
      }
    });
});
io.sockets.on('connection',function(socket){
    console.log('user connected');
    socket.username=signup_user;
    users[socket.username]=socket.id;
    socket.broadcast.emit('user-connected',signup_user);

    socket.on('msg',function(data){
        io.to(users[data.to]).emit('priv',{from:socket.username,mg:data.mg});
        io.to(users[socket.username]).emit('privOWN',{from:socket.username,mg:data.mg});
    });
    socket.on('typing', (data) => {
    	io.to(users[data.to]).emit('typing', {username : socket.username})
    })

    socket.on('NOTtyping', (data) => {
    	io.to(users[data.to]).emit('NOTtyping', {username : socket.username})
    })});
server.listen(3000); 
 