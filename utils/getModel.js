const mongo = require("./db")

const getTenantDb = (tenantDb, modelName, schema) => {
    if (mongo) {
        console.log("connection is ready?")
        // useDb returns a new connection
        const db = mongo.useDb(tenantDb, { useCache: true })
        console.log("db changed")
        // bind model with new connection
        db.model(modelName,schema)
        // return new connection
        return db
    }
}

const getTenantModel = (dbName, modelName, schema) => {
    console.log(`get model by tenantdb: ${dbName}`)
    const tenantDb = getTenantDb(dbName, modelName, schema)
    // get binded model from the connection
    return tenantDb.model(modelName)
}

module.exports = getTenantModel