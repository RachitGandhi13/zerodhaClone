require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3003;
const uri= process.env.MONGO_URL;
const app = express();

app.listen(PORT, ()=>{
    console.log('App Started');
    mongoose.connect(uri);
});