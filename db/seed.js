const User = require("../models/User");
const  { Scent }  = require('../models/Scent');

User.find({}).remove(() => {
  Scent.find({}).remove(() => {
    let diesel = User.create({
      local: {
        character: "gasoline"
      }
    }).then(user => {
      Promise.all([
        Scent.create({
          content: "For those who like it old school"
        }).then(scent => {
          user.scents.push(scent);
        }),
        Scent.create({
          content: "All squared away"
        }).then(scent => {
          user.scents.push(scent);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let honeybbq = User.create({
      local: {
        character: "sauces"
      }
    }).then(user => {
      Promise.all([
        Scent.create({
          content: "Homemade and perfect for braising"
        }).then(scent => {
          user.scents.push(comment);
        }),
        Scent.create({
          content: "Finger lickable all year round"
        }).then(scent => {
          user.scents.push(scent);
        })
      ]).then(() => {
        scent.save(err => console.log(err));
      });
    });
  });
