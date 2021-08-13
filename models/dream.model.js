/*
 * @Author: your name
 * @Date: 2021-07-25 20:05:20
 * @LastEditTime: 2021-07-25 20:42:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /DreamRecorder/models/dream.model.js
 */
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dreamSchema = new Schema({
  username: { type: String, required: true }, 
  contents: { type: String, required: true },
  duration: { type: Number, required: true },
  date: {type: Date, required: true},
}, {
  timestamps: true,
})

const Dream = mongoose.model('Dream', dreamSchema)

module.exports = Dream