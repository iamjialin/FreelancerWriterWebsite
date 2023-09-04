const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Story = require('./model/stories.js');


mongoose.connect('mongodb://127.0.0.1:27017/stories')
    .then(()=>{
        console.log("Connection open")
    })
    .catch(err=>{
        console.log(`ERROR: ${err}`)
    });

app.set('view engine', 'ejs');
app.set('public', path.join(__dirname,'/public'));

app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log("APP is listening on port 3000")
})

// Generic get request should be put in the last, to handle unknown path or route
// app.get('*', (req, res)=>{

//      //do something;

// })