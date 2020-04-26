jQuery(function($){
    //buttons and inputs
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var chatroom = $("#chatroom")
    var feedback = $("#feedback")
    var sendername = $("#sendername");
    var send_sendername =$("#send_sendername");
    var socket =  io.connect();
    socket.on('user-connected',function(data){
            feedback.html('');
            message.val('');
            chatroom.append("<p>" + data + " is online </p>")
    })

    send_message.click(function(e){
        e.preventDefault();
        socket.emit('msg',{to:$("#username").val(),mg:$("#message").val()});
        $('#message').val('');
        });
        // message.bind("keypress", () => {
        //     socket.emit('typing',{to:$("#username").val()})
        // })
        var disableKeyPress = false;

        var typing = $('#message').on('keypress', function() {
        if (!disableKeyPress) {
            disableKeyPress = true;
            socket.emit('typing', {to:$("#username").val()});

            setTimeout(function() {
            disableKeyPress = false;

            setTimeout(function() {
                if (!disableKeyPress) {
                socket.emit('NOTtyping', {to:$("#username").val()});
                }
            }, 3000);
            }, 3000);
        }
        });
        //Listen on typing
        socket.on('user_leave', function(data){
            chatroom.append("<p>" + data.user_name + " is offline </p>")
        });
	socket.on('typing', (data) => {
		feedback.html("<p><i>" + data.username + " is typing a message..." + "</i></p>")
    });
    socket.on('NOTtyping', (data) => {
		feedback.html("<p><i>" + data.username + " is idle..." + "</i></p>")
	});
    socket.on('priv',function(data){
        chatroom.append("<p class='message'>" + data.from + ": " + data.mg + "</p>")
    });
    socket.on('privOWN',function(data){
        chatroom.append("<p class='message'>" + data.from + ": " + data.mg + "</p>")
    });
});