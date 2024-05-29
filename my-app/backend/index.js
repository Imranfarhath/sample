const express=require('express');
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/data').then(()=>console.log("connected")).catch((e)=>console.log(e));
const User=require('./db')
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

const a=10;
const b=20;
console.log(a+b);


async function insertData()
{
    console.log(await User.find());
}
insertData();


app.get('/getuserdetails',(req,res)=>{
    const user={"name":"imranfarhath","age":20};
    res.status(200).json(user);
})

app.post('/setdata',(req,res)=>{
    console.log(req.body);
    //
    //

    res.status(200).json("successful");
})

app.listen(3000,()=>{
    console.log("Server is running on 3000 port");
})