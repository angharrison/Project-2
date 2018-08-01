const { Scent, Comment } = require("../models/Scent");
const User = require("../models/User");
/*
module.exports = {
  show: (req, res) => {
    Scent.findOne({ _id: req.params.id })
      .populate("character")
      .exec(function(err, scent) {
        Comment.populate(scent.comments, { path: "character" }, function(
          err,
          comments
        ) {
          scent.comments = comments;
          res.render("scent/show", scent);
        });
      });
  },
  new: (req, res) => {
    User.find({}).then(users => {
      res.render("scent/new", { users });
    });
  },
  create: (req, res) => {
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
    let { content, character } = req.body;
    Tweet.findOne({ _id: req.params.id }).then(tweet => {
      tweet.comments.push({
        content,
        character
      });
      tweet.save(err => {
        res.redirect(`/tweet/${tweet._id}`);
      });
    });
  },
  delete: (req, res) => {
    Scent.findOneAndRemove({ _id: req.params.id }).then(scent => {
      res.redirect('/')
    })
  }
};
*/
