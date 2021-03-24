const express = require('express');
const path= require('path');
const app= express();

const pool=require('./database');

app.set('views',path.join(__dirname,'views'));
app.use('/public', express.static(path.join(__dirname,'views/public')));

app.set('view engine', 'ejs');

app.get('/',async(req,res)=>{
    let filas= await pool.query("select * from empleado");
    console.log(filas);
    res.render('index.ejs',{niveles:filas});    
})


app.get('/home',(req,res)=>{
    res.render('home');
})

app.listen('3000',()=>{
    console.log("Corriendo en el puerto 3000")
})


module.exports=app;