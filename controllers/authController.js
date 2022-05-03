const login = (req, res, next) => {
    // authenticate user and 
    // get required db related information  for th euser
    res.status(200).json({ message: "success" })
}

module.exports = { login }