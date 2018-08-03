const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
//
const User = new Schema({
  local: {
    email: String,
    password: String
  },
  scents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Scent"
      // image: String
    }
  ]
});
//
module.exports = mongoose.model("User", User);
