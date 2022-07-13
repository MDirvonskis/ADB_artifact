const express = require('express')
const app = express()
const port = 8000
const { connect } = require('./database');
const db = require('./database');//Route for database connection
//const cors = require('cors')

app.use(express.json())//allows json to be parsed
//app.use(cors)//allows curl commands
//1id
//2ename
//3mgr
//4hiredate
//5sal
//6comm
//7depno
app.get('/', (req, res) => {
    a();
    //send html here
    res.send('Hello World!')
  })
function a(){
    var sql = `INSERT INTO EMP 
            VALUES
            (
                ?, ?, ?, ?, ?, ?, ?
            )`;
  db.query(sql,[1, "s", 1, 1111-2-21, 10, 10, 10])
  if(err){
    res.sendStatus(500)
  }
  else{
    console.log('Created new Employee')
    res.status(201)
}
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})