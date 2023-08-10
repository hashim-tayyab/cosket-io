const http = require('http');
const express = require("express");
const path = require("path");
const app = express();
const { Server } = require("socket.io");
const server = http.createServer(app);
const io = new Server(server);

//socket.io
io.on("connection", (socket) => {
    socket.on("user-message", (message) => {
        io.emit("message", message);
    });
});

//http request 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
})

server.listen(3000);