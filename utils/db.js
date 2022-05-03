const mongoose = require("mongoose")

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 30000,
};

const dbUrl = 'mongodb://localhost:27017/'

const connectDb = () => {
    const db = mongoose.createConnection(dbUrl, dbOptions)
    db.on('open', () => {
        console.log("connection opened")
    })
    db.on('error', (err) => {
        console.log("connection error :>",err)
        process.exit(0)
    })
    return db
}

//! effects of let and const while storing connection !?
// let connObj = connectDb()

module.exports = connectDb()


