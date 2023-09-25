import express from "express"
import { studentController } from "../controllers/index.js"

const router = express.Router()

router.get("/", studentController.getAllStudents§)

router.get("/:id", (req, res) => {
  // debugger;
  res.send(`GET students by id +${req?.params?.id}`)
})

router.post("/insert", (req, res) => {
  res.send("POST insert students")
})

export default router
