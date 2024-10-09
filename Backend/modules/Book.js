import mongoose from 'mongoose';
const { Schema } = mongoose;

const Bookschema = new Schema(
 {
    title:
    { type:String,
     required:true,
    },
    authar:String,
    printnum:Number,
    date:String,
    elctriccopy:Boolean,
    price:Number,
    language:{type:[String]},
    category:String,
  },
  {timestamps:true}//when create user i see what time to create !! this object 
);


const liblary=mongoose.model("liblary",Bookschema);// i want to export my schema to user in another table !!
export default liblary; // i let the shema it is exported 
