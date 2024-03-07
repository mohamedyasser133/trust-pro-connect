const express= require("express");
const mysql =  require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host:"localhost",
  use: "root",
password:"",
database:"signup"
})

app.post('/signup',(req,res)=>{
const sql='INSERT INTO login(`name`,`email`,`password`)VALUES(?)';

db.query(sql,[req.body.email,req.body.password],(err, data)=>{
  if(err){
    return res.json('ERORR');

  }
  if(data.lengh>0){
    return res.json("Success");
  }else{
    return res.json("Failed");
  }
})

})
app.listen(8081,()=>{
  console.log("listening");
})