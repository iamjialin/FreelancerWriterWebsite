const mongoose = require('mongoose');

const storiesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    background_img:{
        type: String, // Store as a string URL pointing to the local stored image path or URL
        required: true
    },
    intro_text:{
        type: String, 
        required: true
    },
    link:{
        type: String, // URLs can be stored as strings
        required: true
        // a validation function may be needed
    }
});


const Story = mongoose.model('Story', storiesSchema);
module.exports = Story;