import { body, validationResult } from "express-validator"
import { studentRepository, userRepository } from "../repositories/index.js"
import { EventEmitter } from "node:events"
import HttpStatusCode from "../database/HttpStatusCode.js"
const myEvent = new EventEmitter()
// listen
myEvent.on("event.register.user", (data) => {
  console.log(data)
})
const login = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: errors.array(),
    })
  }
  const { email, password } = req.body
  //call repository
  try {
    let existingUser = await userRepository.login({ email, password })
    res.status(HttpStatusCode.OK).json({
      message: "Login user successfully",
      data: existingUser,
    })
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    })
  }
}

const register = async (req, res) => {
  //destructuring
  const { name, email, password, phoneNumber, address } = req.body

  //Event Emitter
  myEvent.emit("event.register.user", { email, phoneNumber })
  try {
    debugger
    const user = await userRepository.register({
      name,
      email,
      password,
      phoneNumber,
      address,
    })
    res.status(HttpStatusCode.INSERT_OK).json({
      message: "Register user successfully",
      data: user,
    })
  } catch (exception) {
    debugger
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    })
  }
}

const getDetailUser = async (req, res) => {}

export default {
  login,
  register,
  getDetailUser,
}
