const mongoose = require('mongoose');
const Story = require('./model/stories.js');

const storiesToInsert = [
    {
        name:"the-december-doctrine",
        title:"The December Doctrine",
        background_img:"/imgs/the_december_doctrine.jpg",
        intro_text:"In the dead of winter, unfortunate souls seek refuge in a mega-church, only to find it infiltrated by psychotic individuals with a predilection for recreational murder. ",
        link:"https://dreamcoders.wixsite.com/my-site/post/the-december-doctrine"
    },
    {
        name:"cult-leader",
        title:"Cult Leader",
        background_img:"/imgs/cult_leader.jpg",
        intro_text:"In which Mordred engineers a volunteer trip to a treatment center, only for the students to find out that their school counselor may have been the vicious leader of an apocalyptic pagan cult. ",
        link:"https://dreamcoders.wixsite.com/my-site/post/cult-leader"
    },
    {
        name:"son-of-cain",
        title:"Son of Cain",
        background_img: "/imgs/son_of_cain.jpg",
        intro_text:"In which Clem and Benedict have very different ideas about what it means to be a lawman one defends notorious criminals while the other seeks to destroy them.",
        link:"https://dreamcoders.wixsite.com/my-site/post/son-of-cain"
    },
    {
        name: "mirror-mirror",
        title:"Mirror Mirror",
        background_img: "/imgs/mirror_mirror.jpg",
        intro_text:"A twist of fate causes Benedict to inhabit the body of a man who causes death and destruction whenever he goes; Mordred is ecstatic when he finds out that his school has been turned into a casino. ",
        link:"https://dreamcoders.wixsite.com/my-site/post/mirror-mirror"
    },
    {
        name:"blood-and-shadows",
        title: "Blood and Shadows",
        background_img: "/imgs/blood_and_shadows.jpg",
        intro_text: "A multidimensional entity with a penchant for flesh and absolute power terrorizes London, but Mordred remains oblivious; Silas and Benedict grapple with their dual, contradicting natures",
        link: "https://dreamcoders.wixsite.com/my-site/post/blood-and-shadows"
    },
    {
        name: "all-sinners-burn",
        title: "All Sinners Burn",
        background_img: "/imgs/all_sinners_burn.jpg",
        intro_text: "In which a bent out of shape Nick is forced to contend with a serial killer known as the Devil of Del Rio; Ray the demon chronicles the youth's ruthless descent into the shattered necropolis of the modern world. ",
        link: "https://dreamcoders.wixsite.com/my-site/post/all-sinners-burn"
    },

];

mongoose.connect('mongodb://127.0.0.1:27017/stories')
    .then(() => {
        console.log('Connected to MongoDB');
        
        Story.insertMany(storiesToInsert)
            .then(res => {
                console.log('Stories inserted:', res);
                return mongoose.disconnect();
            })
            .catch(err => {
                console.error('Error inserting stories:', err);
                return mongoose.disconnect();
            });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });