const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get("/", async(req, res) => {
    res.sendFile("public/index.html", {root:"../"})
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on http://localhost:${process.env.PORT || 3000}`)
});