const User = require("../models/User");
const { Scent } = require("../models/Scent");


module.exports = {
  show: (req, res) => {
    // console.log("user/new")
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
    // console.log("user/new")
    res.render("user/new");
  },
  create: (req, res) => {
    // console.log("user/create")
    User.create({
      local: {
        character: req.body.email,
        content: req.body.password
      }
    }).then(user => {
      res.redirect(`/user/${user._id}`);
    });
  }
};
