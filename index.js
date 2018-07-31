const express = require('express');
const hbs = require('hbs');


const app = express();

app.set("view engine", "hbs");

app.listen(5500, () => console.log("It's alive!"));
