# ADB_artifact
# Install Express.js
- npm init
- npm $ npm install express

# Install Vue.js
- npm install vue 
- npm install vue@csp

# Install mySQL Database:
- npm i mysql2

# Start the server
 - node server.js

# Curl commands
curl -v -X POST    http://localhost:3000/addEmployee -H "Content-Type: application/json" -d '{"id": 3, "ename": "test", "job": "save", "mgr": 1, "hiredate": "1922-2-5", "sal": 0.11, "comm": 10.1, "deptno": 10 }'

curl -v -X POST    http://localhost:3000/addDepartment -H "Content-Type: application/json" -d '{"id": 50, "dname": "test", "loc": "save"}'

curl -v -X GET    http://localhost:3000/showEmployee/
//add EMPNO at the end to find information about employee

curl -v -X DELETE  http://localhost:3000/deleteEmployee/
//add EMPNO at the end to delete employee

curl -v -X DELETE  http://localhost:3000/deleteDepartment/
//add DEPTNO at the end to delete department

curl -v -X GET     http://localhost:3000/