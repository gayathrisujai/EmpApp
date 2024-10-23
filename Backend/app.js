const express =require('express');
const rout=require('./routes/basicroutes');
require ('./db/connection');
const user_route=require('./routes/userRoutes')
const cors =require('cors');

require('dotenv').config();
const port=process.env.port
// app.use('/')


const app = new express();
app.use(cors());
app.use('/home',rout);
app.use('/user',user_route)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})