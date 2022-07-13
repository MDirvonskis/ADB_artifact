const express = require('express')
const db = require('./database')
const cors = require('cors')
const mysql = require('mysql2')
const app = express()
const port = 3000

//const { connect } = require('./database');
//Route for database connection
app.use(express.json())//allows json to be parsed
app.use(cors())//allows curl commands


app.get('/', (req, res) => {
  //send html here
  res.sendFile(__dirname+'/client.html')
})
app.get('/showEmployee/:id', (req,res) => {
  const id = parseInt(req.params.id)
  db.query(
    'SELECT * FROM EMP WHERE EMPNO =  ?',
    [id],
    function(err,results,fields){
      console.log(results)
      //console.log(fields)
      //console.log(JSON.parse(results))
      res.send(results)
      console.log(1)
    }
  )
})
app.post('/addEmployee', (req,res) =>{
  //
  var sql = `INSERT INTO EMP(EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)
            VALUES
            (
                ?, ?, ?, ?, ?, ?, ?, ?
            )`;
  db.query(sql,[req.body.empn, req.body.ename, req.body.job, req.body.mgr, req.body.hiredate, req.body.sal, req.body.comm, req.body.deptno])
})
app.post('/addDepartment', (req,res) =>{
  //
  var sql = `INSERT INTO DEPT(DEPTNO, DNAME, LOC)
            VALUES
            (
                ?, ?, ?
            )`;
  db.query(sql,[req.body.deptno, req.body.dname, req.body.loc])
})
app.delete('/deleteEmployee/:id', (req,res) =>{
  const id = parseInt(req.params.id)
  var sql = `DELETE FROM EMP
            WHERE EMPNO = ?`;
  db.query(sql,[id])
})
app.delete('/deleteDepartment/:id', (req,res) =>{
{
  const id = parseInt(req.params.id)
  var sql = `DELETE FROM DEPT
            WHERE DEPTNO = ?`;
  db.query(sql,[id])
}})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})