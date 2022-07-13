const express = require('express')
const app = express()
const port = 3000
//const { connect } = require('./database');
const db = require('./database');//Route for database connection

app.use(express.json());//allows json to be parsed
//1id
//2ename
//3mgr
//4hiredate
//5sal
//6comm
//7depno


app.get('/', (req, res) => {
  //send html here
  res.send('Hello World!')
})
app.post('/addEmployee', (req,res) =>{
  //
  var sql = `INSERT INTO EMP 
            VALUES
            (
                ?, ?, ?, ?, ?, ?, ?
            )`;
  db.query(sql,[req.params.id, req.params.ename, req.params.mgr, req.params.hiredate, req.params.sal, req.params.comm, req.params.deptno])
  if(err){
    res.sendStatus(500)
  }
  else{
    console.log('Created new Employee')
    res.status(201)
  }
})
app.post('/addDepartment', (req,res) =>{
  //
  var sql = `INSERT INTO DEPT 
            VALUES
            (
                ?, ?, ?
            )`;
  db.query(sql,[req.params.id, req.params.dname, req.params.loc])
  if(err){
    res.sendStatus(500)
  }
  else{
    console.log('Created new Employee')
    res.status(201)
  }
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})