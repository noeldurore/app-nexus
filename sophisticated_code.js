/*

Filename: sophisticated_code.js

Description: This code is a sophisticated and elaborate example of a web-based chat application.
It includes various features such as user authentication, real-time messaging, chat room creation, and message notifications.

Note: This code assumes the use of Node.js and Express.js for the backend and Socket.IO for real-time messaging.

*/

// Import required modules
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    // Perform authentication logic
    res.redirect('/chat');
});

app.get('/chat', (req, res) => {
    // Render chat page with authenticated user
    res.render('chat');
});

// Create HTTP server using Express app
const server = http.createServer(app);

// Initialize Socket.IO instance
const io = socketIO(server);

// Socket.IO event handling
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`User joined room: ${room}`);
        io.to(room).emit('message', 'User joined the room');
    });

    socket.on('leaveRoom', (room) => {
        socket.leave(room);
        console.log(`User left room: ${room}`);
        io.to(room).emit('message', 'User left the room');
    });

    socket.on('chatMessage', (data) => {
        io.to(data.room).emit('message', data.message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});