// Node server which will handle socket io connection 



const io =require("socket.io")(3030);

const users = {};

// io.on mean listen every user who is connect who is sending message

// socket.on is used to check what should if someone is connected 


io.on('connection',socket =>{
socket.on('new-user-joined',name =>{
users[socket.id] = name;
socket.broadcast.emit('user-joined',name);
})

socket.on('send',message =>{
    socket.broadcast.emit("receive",{message:message,name:user[socket.id]})
});

})