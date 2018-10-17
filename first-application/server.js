/*
    James Houston - 10/16/2018
    Demo application with express
    Changes to this file should only trigger builds on this application in TeamCity
 */

const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (request, response) => {
  response.send('Woohoo!')
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started, listening on port ${PORT}`)
})
