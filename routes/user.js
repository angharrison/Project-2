const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");


router.get("/new", scentController.new);
router.get("/:id", scentController.show);
router.post("/", scentController.create);

module.exports = router;
