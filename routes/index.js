const router = require("express").Router()
const authRoute = require("./authRoute")
const tenantTasks = require("./tenantTasks")

const checkDbInQuery = (req, res, next) => {
    const obj = req.query
    if(!obj.db){
        return res.status(400).json({ message: "bad request, no db provided" })
    }
    req.tenantDb = obj.db
    next()
}

router.use('/auth', authRoute)
router.use('/tasks', checkDbInQuery, tenantTasks)

module.exports = router