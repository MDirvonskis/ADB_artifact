const express = require('express')
const db = require('./database');
const cors = require('cors')
const app = express()
const port = 3000
//const { connect } = require('./database');
//Route for database connection


app.use(express.json())//allows json to be parsed
app.use(cors())//allows curl commands
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})