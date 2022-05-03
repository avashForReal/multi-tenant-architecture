const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    task_name: String
})

module.exports = taskSchema
