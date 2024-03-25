import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({path:'.env.example'})


const Connection = async () => {

  await mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Database Connection Successfull')
  }).catch((e)=> {
    console.log('Error of db :',e);
  })

};

export default Connection;
