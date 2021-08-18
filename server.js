/*
 * @Author: your name
 * @Date: 2021-07-25 18:53:08
 * @LastEditTime: 2021-08-18 23:22:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DreamRecorder/server.js
 */

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/key')

require('dotenv').config()

const app = express()

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
  }, (accessToken) => {
    console.log(accessToken)
  })
)

app.get(
  '/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)

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

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})