const express = require('express')
const app = express()
const port = 3000
const { connect } = require('.database');
const db = require('./database');//Route for database connection

//1id
//2ename
//3mgr
//4hiredate
//5sal
//6comm
//7depno


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('AddEmployee', (req,res) =>{
  //
  var sql = `INSERT INTO user 
            VALUES
            (
                ?, ?, ?, ?, ?, ?, ?
            )`;
  db.query(sql,[req.params.id, req.params.ename, req.params.mgr, req.params.hiredate, req.params.sal, req.params.comm, req.params.deptno])
})
app.post('AddDepartment', (req,res) =>{
  //

})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})