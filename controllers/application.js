const { Scent } = require("../models/Scent");

module.exports = {
  index: (req, res) => {
    res.render('app/index')                            //render view inside app within index
    }
  };

//     Scent.find({})
//       .sort({ createdAt: -1 })
//       .limit(10)
//       .populate("character")
//       .then(scents => {
//         res.render("app/index", { scents });
//       });
//   }
// };
