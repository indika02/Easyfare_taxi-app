const express = require('express');
const cors = require("cors")
const app = express();
const mysql = require('mysql');
const { response } = require('express');

const bcrypt = require('bcrypt');
const saltRound = 10

const bodyParser = require ('body-parser');
const session = require('express-session');

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'senuri1324',
    database:'oneway',

});

//app use
app.use(cors({
    origin:['http://localhost:3000'],
    methods:["GET","POST"],
    credentials:true,
}));

app.use(bodyParser.urlencoded({extended:true})); 
app.use(express.json());


//driver register
app.post("/api/DriverRegister",(req,res) => {
    
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Phone = req.body.Phone;
    const Password = req.body.Password;
    const RegisterDate = req.body.RegisterDate;
    const Status = req.body.Status;
    const Ratings = req.body.Ratings;
    const sqlSelect = "INSERT INTO driver (Name,email,password, address,ratings, phone, registerdDate, Status) VALUES (?,?,?,?,?,?,?,?);"
    bcrypt.hash(Password,saltRound,(err,hash)=>{
        console.log(hash)
        if (err){
            console.log({err:err});
        }
        db.query(sqlSelect,[Name, Email,hash,Address,Ratings,Phone,RegisterDate,Status], (err,result)=>{
            res.send({Status:'Registered'});
    
        }) 
    })       
});
//driver Login
app.post("/api/DriverLogin",(req,res) => {
    
    const Email = req.body.Email;
    const Password = req.body.Password;
    const sqlSelect = "SELECT * FROM driver WHERE email=? ;"
    
    
    db.query(sqlSelect,[Email,Password], (err,result)=>{
        if(err){
            res.send({err:err});
        }
        if(result.length>0){
            bcrypt.compare(Password,result[0].password,(err,response)=>{
                if(response){
                    res.send(result)
                }else{
                    res.send({message:"Wrong username/password combination!"});
                }
            })
        }else{
            res.send({message:"User doesn't exist!"});
        }        

    })    
});

app.listen(3001, ()=> {
    console.log('running on port 3001');
});