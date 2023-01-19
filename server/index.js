const express = require("express")
const cors = require("cors")
const app = express()
const port = 4000;
const axios = require("axios")

app.use(cors())

app.use(express.json())

const { getFortune, getCompliment, getNameList, submitName, deleteName,displayRadioValue } = require(`./controller`)

app.get('/api/fortune', getFortune)
app.get('/api/compliment', getCompliment)
app.get('/api/name', getNameList)
app.post('/api/name', submitName)
app.delete('/api/name/:id', deleteName)



app.listen(4000, () => console.log("Server running on 4000"))
 