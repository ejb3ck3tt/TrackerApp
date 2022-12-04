//setup express
const express = require('express')
//setup middleware
const cors = require('cors')
//setup database
const mongoose = require('mongoose')

//for env variables
require('dotenv').config()

//create the express server
const app = express()
const port = process.env.PORT || 5000

//connect middleware
app.use(cors())
//allows to parse json for sending and receiving
app.use(express.json())
//database uri - refer to mongoDB to get the connection sring
const URI = process.env.ATLAS_URI
//pass the url where db is stored
//start the connection
mongoose.connect(URI, (err) => {
  if (err) throw err
})

const connection = mongoose.connection
connection.once('open', () => {
  console.log('MongoDB database connection established  successfully')
})

//what starts the server
app.listen(port, () => {
  console.log(`server is runninng on port: ${port}`)
})
