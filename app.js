const express=require('express');
const mongoose=require('mongoose');
const ejs = require('ejs')
const PORT=9898;
const app=express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname +'/public'))
// template engine
app.set('view engine','ejs');
app.set('views','./views');

// db connection
mongoose.connect('mongodb://127.0.0.1:27017/mongoAssignment',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
const db = mongoose.connection;
db.on('error',(err)=>{throw err});
db.once('open',()=>{console.log("Database Connected")})
//db end 
const mainRoutes=require('./index');
app.use("/",mainRoutes);

app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Work On ${PORT}`)
})