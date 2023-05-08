const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
       type:String,
       required:true,
       minLength: 3
    },
    username:{
       type:String,
       required:true,
       minLength: 3
    },
    email:{
       type:String,
       required:true,
       validate(value){
          validator.isEmail(value);
       }
    },
    phone:{
       type:Number,
       required:true,
    }
 });
 
 const UserDetail= mongoose.model("UserDetail",userSchema);

 module.exports = UserDetail;