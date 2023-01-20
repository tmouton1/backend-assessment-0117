const express = require("express")
const cors = require("cors")
const app = express()
const axios = require("axios")

app.use(cors())

app.use(express.json())

const { getFortune, getCompliment, submitName, deleteName } = require(`./controller`)

app.get('/api/fortune', getFortune)
app.get('/api/compliment', getCompliment)
app.post('/api/name', submitName)
app.delete('/api/name/:id', deleteName)


app.listen(4000, () => console.log("Server running on 4000"))
 