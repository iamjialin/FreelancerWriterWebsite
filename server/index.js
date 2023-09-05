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
app.use('/public', express.static(path.join(__dirname, 'public')));
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:5173' // replace with your frontend server's address
}));


app.listen(3000, ()=>{
    console.log("APP is listening on port 3000")
})

app.get('/portfolio/:story', async (req, res)=>{
    try {
        const story = await Story.findOne({name:req.params.story});
        if(!story){
            return res.status(404).json({ message: 'Story not found' });
        }
        res.json(story)
    } catch (error) {
        res.status(500).json({message:err.message});
    }
})

// Generic get request should be put in the last, to handle unknown path or route
// app.get('*', (req, res)=>{

//      //do something;

// })