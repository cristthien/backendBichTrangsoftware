const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();
const app = express();
const port= process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri= process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB connect successfully');
});


const customerRouter=require('./routers/customers.js');
app.use('/customers',customerRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})