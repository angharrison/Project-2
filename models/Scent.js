const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
//
// const Comment = new Schema({
//   content: String,
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//   character: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   }
// });
//
const Scent = new Schema({
    character: String,
    type: String,
    content: String
  });

module.exports = mongoose.model("Scent", Scent)

//     "character": "honeybbq",
//     "type": "sauce",
//     "content": "Finger lickable all year round"
//   },
//   {
//     "character": "Jasmine",
//     "type": "herb",
//     "content": "Relaxingly fragrant to induce a loving vibe"
//   }
// });

// const Scent = new Schema({
//   cont: String
// });

// db.scentall.insert(
//   {
//     "cont": "Diesel"
//   }
// )
//
// const User = new Schema({
//   content: String,
//   createdAt: {
//     type: Date,
//     default: Date.now()
//   },
//    character: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
//   },
//   comments: [Comment]
//   });
//
// module.exports = {
//   Scent: mongoose.model("Scent", Scent),
//   Comment: mongoose.model("Comment", Comment),
//   User: mongoose.model("User", User)
// };
//
//
