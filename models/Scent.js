const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  character: {
    type: Schema.Types.ObjectId,
    ref: "Scent"
  }
});

const Scent = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  character: {
    type: Schema.Types.ObjectId,
    ref: "Scent"
  },
  comments: [Comment]
});

const User = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
   character: {
    type: Schema.Types.ObjectId,
    ref: "Scent"
  },
  comments: [Comment]
  });

module.exports = {
  Scent: mongoose.model("Scent", Scent),
  Comment: mongoose.model("Comment", Comment),
  User: mongoose.model("User", User)
};


// module.exports = mongoose.model("Scent", Scent)
