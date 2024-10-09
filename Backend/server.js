import express from "express";
const app=express();
import mongoose from 'mongoose';
import liblary from "./modules/Book.js";
import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());
const port=8086;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database hi");
}

app.post('/postBook',(req,res)=>{
    const newBook= new liblary({
        title:req.body.title,
        authar:req.body.authar,
        printnum:req.body.printnum,
        date:req.body.date,
        elctriccopy:req.body.elctriccopy,
        price:req.body.price,
        language:req.body.language,
        category:req.body.category,
    })
    newBook.save()
    .then((result)=>{
        res.send(result);
    })
})

app.get('/getBook',(req,res)=>{
    liblary.find()
    .then((result)=>{
        res.send(result)
    })
})

app.patch('/updateBook/:id',(req,res)=>{
    const {id}=req.params;
    liblary.findByIdAndUpdate(id,req.body,{new:true, runValidators:true})
    .then((result)=>{
        res.send(result);
    })
})

app.delete('/deleteBook/:id',(req,res)=>{
    const {id}= req.params;
    liblary.findByIdAndDelete(id)
    .then(()=>{
        res.send('delete sucess !!');
    })
})

app.get('/OneBook/:id',(req,res)=>{
    const{id}=req.params;
    liblary.findById(id)
    .then((result)=>{
        res.send(result);
    })

})

app.listen(port,()=>{

})
