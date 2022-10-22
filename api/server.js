const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRouter = require("./routes/user.routes");
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

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening at 5000");
});
