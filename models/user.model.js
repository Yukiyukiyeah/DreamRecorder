/*
 * @Author: your name
 * @Date: 2021-07-25 20:05:32
 * @LastEditTime: 2021-07-25 20:08:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DreamRecorder/models/user.model.js
 */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  }
}, {
  timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User