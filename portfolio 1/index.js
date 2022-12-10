const express = require('express')
const http = require("http")
const app = express()
const { Server } = require("socket.io")

const httpServer = http.createServer(app)
const io = new Server(httpServer)

    

let totalusers = 0;
const history = []

io.on("connection", (socket) => {
    totalusers += 1;

    console.log("a new user found. Total users:", totalusers)
    
    socket.broadcast.emit("newuser", totalusers)
    socket.emit("history", history)

    socket.on("newtxt", (message) => {
        history.push(message)
        io.emit("newtxt", message);
        console.log("nem message received", message);

    })


    socket.on("disconnect", () => {
        totalusers -= 1;
        console.log("A user disconnected. Total users: ", totalusers)
    })

})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"))


httpServer.listen(8080, () => {
    console.log('server started on port 8080');
})
