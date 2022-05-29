const express = require('express')
const app = express()

app.get('/get-data' , (req , res) => {
  res.status(200).json({
    name: "Lets",
    surname: "Go"
  })
})

module.exports = {
  path: '/api',
  handler: app
}