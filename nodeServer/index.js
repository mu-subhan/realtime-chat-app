// Node server which will handle socket io connection 


// io.on mean listen every user who is connect who is sending message

// socket.on is used to check what should if someone is connected 

const io = require("socket.io")(8000,{
    cors: {
        origin: "http://127.0.0.1:5500", // Allow requests from this origin
        methods: ["GET", "POST"]         // Allow these HTTP methods
      }
});

const users = {};

io.on('connection', socket => {
    // Handle new user joining
    socket.on('new-user-joined', name => {
        console.log("new user", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    // Handle message sending
    socket.on('send', message => {
        socket.broadcast.emit("receive", { message: message, name: users[socket.id] });
    });

    // Handle user disconnect
    socket.on('disconnect', () => { // Fixed typo: `disconnect` should be a string
        socket.broadcast.emit("left", users[socket.id]);
        delete users[socket.id];
    });
});
