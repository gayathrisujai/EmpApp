const express = require('express');
const app = new express();
const morgan = require('morgan')
app.use(morgan('dev'));
const port=process.env.port

const route = require('./routes/basicroutes');
app.use('/home', route);

require('dotenv').config();
require('./db/connection')




app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})