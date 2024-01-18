import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { getUsers, loginUser, registerUser } from "./user.controller.js";

const app = express();
const PORT = 4000;

mongoose.connect(
  "mongodb://rajessvee:QRia5RJeYLnxvWNG@ac-j0ekvra-shard-00-00.gpmx3us.mongodb.net:27017,ac-j0ekvra-shard-00-01.gpmx3us.mongodb.net:27017,ac-j0ekvra-shard-00-02.gpmx3us.mongodb.net:27017/DSA?ssl=true&replicaSet=atlas-slinf7-shard-0&authSource=admin&retryWrites=true&w=majority"
);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.get("/api/v1/users", getUsers);

app.post("/api/v1/login", loginUser);
app.post("/api/v1/register", registerUser);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
