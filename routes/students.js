import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET students");
});

router.get("/:id", (req, res) => {
  // debugger;
  res.send(`GET students by id +${req?.params?.id}`);
});

router.post("/insert", (req, res) => {
  res.send("POST insert students");
});

export default router;
