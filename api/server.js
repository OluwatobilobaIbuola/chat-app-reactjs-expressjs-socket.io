const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routes/user.routes");
const messageRouter = require("./routes/message.routes");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => console.log("Connection failed"));

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log("Listening at 5000");
});

const io = socket(server, {
  cors: {
    origin: process.env.CLIENT_BASE_URL || "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});
