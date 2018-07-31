const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/scentall");
mongoose.Promise = Promise;
module.exports = mongoose;
