const User = require("../models/User");
const  { Scent }  = require('../models/Scent');
const seedData = require("./seeds.json");

Scent.find({}).remove(() => {
  Comment.find({}).remove(() => {
    let diesel = Scent.create({
      local: {
        type: "gasoline"
      }
    }).then(scent => {
      Promise.all([
        Scent.create({
          content: "For those who like it old school"
        }).then(comment => {
          scent.push(comment);
        }),
        Scent.create({
          content: "All squared away"
        }).then(comment => {
          scent.push(comment);
        })
      ]).then(() => {
        scent.save(err => console.log(err));
      });
    });

    let honeybbq = Scent.create({
      local: {
        type: "sauces"
      }
    }).then(scent => {
      Promise.all([
        Scent.create({
          content: "Homemade and perfect for braising"
        }).then(tweet => {
          scent.push(comment);
        }),
        Scent.create({
          content: "Finger lickable all year round"
        }).then(scent => {
          scent.push(scent);
        })
      ]).then(() => {
        scent.save(err => console.log(err));
      });
    });
    
    })
  })
})
