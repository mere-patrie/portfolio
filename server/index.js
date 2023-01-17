const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
var nodemailer = require('nodemailer');
require('dotenv').config()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.email_password
    }
}); 


app.get("/", async(req, res) => {
    res.sendFile("public/index.html", {root:"../"})
});

app.post("/mail", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const subject = req.body.subject;
    const message = req.body.message;
    var mailOptions = {
        from: process.env.email,
        to: email,
        subject: `Portfolio message`,
        text: `Sujet : ${subject}\nName : ${name}\nEmail : ${email}\nMessage : \n${message}`
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error) throw error;
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on http://localhost:${process.env.PORT || 3000}`)
});