import express from "express";
import * as dotenv from "dotenv";

import { usersRouter, studentsRouter } from "./routes/index.js";
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

//routers

app.use("/users", usersRouter);
app.use("/students", studentsRouter);

app.get("/", (req, res) => {
  res.send("response from root router");
});

app.listen(process.env.PORT || 3000, async () => {
  console.log(`listening on port ${PORT}`);
});
