const router =  require("express").Router()
const taskController = require("../controllers/taskController")

router.route('/')
    .get(taskController.getTasks)
    .post(taskController.addTask)

    
module.exports = router