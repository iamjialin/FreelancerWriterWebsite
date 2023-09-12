const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Story = require('./model/stories.js');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connection open")
    })
    .catch(err => {
        console.log(`ERROR: ${err}`)
    });

app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, 'public')));
const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.listen(PORT, () => {
    console.log("APP is listening on port 3000")
})

app.get('/portfolio', async (req, res) => {
    try {
        let storyAll = await Story.find().sort({ _id: -1 });
        if (!storyAll) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.json(storyAll)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
})

app.get('/portfolio/:story', async (req, res) => {
    try {
        const story = await Story.findOne({ name: req.params.story });
        if (!story) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.json(story)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }
})

app.get('/home', async (req, res) => {
    try {
        let storyLatest = await Story.find().sort({ _id: -1 }).limit(3);
        if (!storyLatest) {
            return res.status(404).json({ message: 'Story not found' });
        }
        res.json(storyLatest)
    } catch (error) {
        res.status(500).json({ message: err.message });
    }

})



app.post('/send-email', async (req, res) => {
    try {
        const { customerEmail, customerName, message } = req.body;

        let transporter = nodemailer.createTransport({
            host: 'smtp-mail.outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // send email to my email address
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New message from ${customerName} at ${customerEmail}`,
            text: message
        });

        // send confirmation email to the customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: customerEmail,
            subject: 'Thank you for your message',
            text: 'We have received your message and will get back to you shortly.'
        });

        res.send({ status: 'success' });
    } catch (error) {
        res.send({ status: 'error', message: error.message });
    }
});

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});