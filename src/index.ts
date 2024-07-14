import 'dotenv/config';
import express from 'express';

const app = express();

app.get("/",(req,res,next)=>{

    res.json({status:1})
})

app.listen(process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`listening to port ${process.env.PORT}`);
    }
})