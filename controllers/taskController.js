const taskSchema = require("../models/task")
const getTenantModel = require("../utils/getModel")

const getTasks = async (req, res) => {
    const Tasks = getTenantModel(req.tenantDb, 'task', taskSchema)
    const tenantTasks = await Tasks.find({}) 
    return res.status(200).json({ message: "success", tasks: tenantTasks })
}

const addTask = async (req,res) => {
    const taskObj = req.body
    const Tasks = getTenantModel(req.tenantDb, 'task', taskSchema)
    const createResponse = await Tasks.create(taskObj)
    return res.status(201).json({message: "success", task: createResponse})
}

module.exports = { getTasks, addTask }
