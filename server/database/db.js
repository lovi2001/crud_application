const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

const URL = 'mongodb://localhost:27017/crudApplication';

const connection = async () => {
 try{
    await mongoose.connect(URL , {useUnifiedTopology : true});
    console.log("Database connected successfully...")
   }catch(err){
    console.log("Error while connecting with the database :", err);
 }
};



module.exports = connection;
