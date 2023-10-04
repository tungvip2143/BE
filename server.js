import express from "express"
import * as dotenv from "dotenv"
dotenv.config() //must have
import connect from "./database/database.js"
//authentication middleware
import checkToken from "./authentication/auth.js"
import { usersRouter, studentsRouter } from "./routes/index.js"
//send test requests to postman

const app = express()
app.use(checkToken) //shields
app.use(express.json())
const PORT = process.env.PORT || 3001
//routers
app.use("/users", usersRouter)
app.use("/students", studentsRouter)

app.get("/", (req, res) => {
  res.send("response from root router")
})

app.listen(PORT, async () => {
  await connect()
  console.log(`listening on port ${PORT}`)
})
