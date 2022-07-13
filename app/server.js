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
app.post('/showEmployee/:id', async (req,res) => {
  const id = parseFloat(req.params.id)
  db.query(
    'SELECT * FROM EMP WHERE EMPNO =  ?',
    [id],
    function(err,results,fields){
      res.json(results).statusCode(201)
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
  db.query(sql,[req.body.id, req.body.ename, req.body.job, req.body.mgr, req.body.hiredate, req.body.sal, req.body.comm, req.body.deptno])
})
app.post('/addDepartment', (req,res) =>{
  //
  var sql = `INSERT INTO DEPT(DEPTNO, DNAME, LOC)
            VALUES
            (
                ?, ?, ?
            )`;
  db.query(sql,[req.body.id, req.body.dname, req.body.loc])
})
app.delete('/deleteEmployee/:id', (req,res) =>{
  const id = parseFloat(req.params.id)
  var sql = `DELETE FROM EMP
            WHERE EMPNO = ?`;
  db.query(sql,[id])
})
app.delete('/deleteDepartment/:id', (req,res) =>{
{
  const id = parseFloat(req.params.id)
  var sql = `DELETE FROM DEPT
            WHERE DEPTNO = ?`;
  db.query(sql,[id])
}})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})