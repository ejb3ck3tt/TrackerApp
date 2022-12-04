const express = require('express')
const cors = require('cors')

//for env variables
require('dotenv').config()

//create the express server
const app = express()
const port = process.env.PORT || 5000

//middleware
app.use(cors())
//allows to parse json for sending and receiving
app.use(express.json())

//what starts the server
app.listen(port, () => {
  console.log(`server is runninng on port: ${port}`)
})
