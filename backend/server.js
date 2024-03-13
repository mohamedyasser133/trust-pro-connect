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

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body; 

  const sql = 'INSERT INTO login(`name`, `email`, `password`) VALUES (?, ?, ?)';
  if (db.state === 'connected') {
   
    console.log('connected');}
  if (db.state === 'disconnected') {
   
    console.log('disconnected');
  }

  
  db.query(sql, [name, email, password], (err, data) => {

    if (err) {
      console.error(err);
      return res.json('Error');
    }

    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Failed");
    }
  });
});
app.post('/signup' , (req,res)=>{
  const sql='INSERT INTO login (`name`,`email`,`password`) VALUES(?)'
const values=[
  req.body.name,
  req.body.email,
  req.body.password
]
dp.query(sql,[values],(err,data)=>{
  if (err){
    return res.json("ERORR");
  }
  return res.json(data);
})
})

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
