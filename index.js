const express = require("express")
const port = 3000
const indexRoutes = require("./routes")

const app = express()

app.use(express.json())
app.use(indexRoutes)

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
