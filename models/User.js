const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

// const Comment = new Schema({
//   content: String,
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   }
// });

// const Scent = new Schema({
//   content: String,
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   },
//   comments: [Comment]
// });

// module.exports = mongoose.model("User", User)
//   Scent: mongoose.model("Scent", Scent),
//   Comment: mongoose.model("Comment", Comment)
// };
