const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8181

app.use(cors())

app.get('/', (req, res) => {
    res.send("Permission denied")
})

app.listen(PORT, () => {
    console.log("Server is now live!")
})