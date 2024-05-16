import dotenv from "dotenv";
import connectdb from "./db/index.js";
import { app } from "./app.js";
import http from "http";
import { Server } from "socket.io";
dotenv.config({path : './.env'})

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://karki-chat-app.netlify.app",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  
  socket.on('feedback', (data) => {
    console.log(data)
    socket.broadcast.emit('typing', data)
  })

  
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  })
});

connectdb()
.then(()=>{
  server.listen(process.env.PORT||5000,()=>{
    console.log(`server is running at port: ${process.env.PORT}`)
  })
})
.catch((err)=>{
  console.log("mongodb connection failed",err);
})

export { io }