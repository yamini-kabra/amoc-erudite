const express = require('express');
const route = express.Router();
var User = require('../user');
const path = require('path');

route.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(),'/login.html'));
});
//console.log(path.join(process.cwd(),'/login.html'));
route.get('/signup',(req,res)=>{
    res.sendFile(path.join(process.cwd(),'/signup.html'));
});

route.get('/home',(req,res,next)=>{
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
          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
        }
      }
    });
});
// GET /logout
route.get('/logout', function(req, res, next) {
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

route.post('/',(req,res,next)=>{
    if (req.body.email && req.body.password) {
        User.authenticate(req.body.email, req.body.password, function (error, user) {
          if (error || !user) {
            var err = new Error('Wrong email or password.');
            err.status = 401;
            return next(err);
          } else {
            req.session.userId = user._id;
            return res.redirect('/home');
          }
        });
      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
});

route.post('/signup',(req,res,next)=>{
    if (req.body.email &&
        req.body.username &&
        req.body.password) {
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        }
        //use schema.create to insert data into the db
        User.create(userData, function (err, user) {
          if (err) {
            return next(err)
          } else {
            return res.redirect('/home.html');
          }
        });
      }
});

module.exports = route;