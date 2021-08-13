/*
 * @Author: your name
 * @Date: 2021-07-25 18:53:08
 * @LastEditTime: 2021-07-25 20:13:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DreamRecorder/server.js
 */

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection
connection.once('open', () => {
  console.log("MongoDB database connection established successfully")
})

const dreamsRouter = require('./routes/dreams')
const usersRouter = require('./routes/users')

app.use('/dreams', dreamsRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})