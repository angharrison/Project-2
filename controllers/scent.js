const Scent  = require("../models/Scent");
const User = require("../models/User");

module.exports = {
  show: (req, res) => {
    // console.log("scent/new")
    res.render("scent/new")
    // Scent.findOne({ _id: req.params.id })
    //   .populate("character")
    //   .exec(function(err, scent) {
    //     Comment.populate(scent.comments, { path: "character" }, function(
    //       err,
    //       comments
    //     ) {
    //       scent.comments = comments;
    //       res.render("scent/show", scent);
    //     });
    //   });

  },
  new: (req, res) => {
    // console.log("scent/new")
    User.find({}).then(users => {
      res.render("scent/new", { users });
    });
  },

  create: (req, res) => {
    // console.log("scent/new")
    Scent.create({
      content: req.body.scent.content,
      character: req.body.scent.character,
    }).then(scent => {
      User.findOne({ _id: req.body.content }).then(scent => {
        user.scents.push(scent);
        user.save(err => {
          res.redirect(`/scent/${scent._id}`);
        });
      });
    });
  },
  update: (req, res) => {
    // console.log("scent/new")
    let { content, character } = req.body;
    Scent.findOne({ _id: req.params.id }).then(scent => {
      scent.push({
        content,
        character
      });
      scent.save(err => {
        res.redirect(`/scent/${scent._id}`);
      });
    });
  },
  delete: (req, res) => {
    // console.log("scent/new")
    Scent.findOneAndRemove({ _id: req.params.id }).then(scent => {
      res.redirect('/')
    })
  }
};
