const express = require('express')
const app = express()
const port = 3000
const { connect } = require('.database');
const db = require('./database');//Route for database connection


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})