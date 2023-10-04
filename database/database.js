import mongoose from "mongoose"
import { print, OutputType } from "../helpers/print.js"
import Exception from "../exceptions/Exception.js"

const connect = async (first) => {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI)
    print("connect mongoose successfully", OutputType.SUCCESS)
    return connection
  } catch (error) {
    const { code } = error
    if (error.code == 8000) {
      throw new Exception(Exception.WRONG_DB_USERNAME_PASSWORD)
    }
    // let errorMessage = error.message
    throw new Exception(error.message)
  }
}

export default connect
