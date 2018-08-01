const User = require("../models/User");
const { Scent } = require("../models/Scent");

/*
module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "scents",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(user => {
        res.render("user/show", { user });
      });
  },
  new: (req, res) => {
    res.render("user/new");
  },
  create: (req, res) => {
    User.create({
      local: {
        character: req.body.character,
        content: req.body.content
      }
    }).then(user => {
      res.redirect(`/user/${user._id}`);
    });
  }
};
*/
