const express = require('express');
const hbs = require('hbs');

const app = express();
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));
app.set("view engine", "hbs");

app.use(require("./routes/index.js"));

app.use(express.static('public/images')) //make img folder use
app.use(express.static('public/css'))   //link to css folder in public

app.listen(5500, () => console.log("It's alive!"));
