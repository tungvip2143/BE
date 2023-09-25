const login = async (req, res) => {
  ;(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body
    res.send("POST login users")
  }
}

const register = async (req, res) => {
  res.send("POST register users")
}

const getDetailUser = async (req, res) => {}

export default {
  login,
  register,
  getDetailUser,
}
