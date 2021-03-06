const express = require("express");
const router = express.Router();
const scentController = require("../controllers/scent.js");

router.post("/", scentController.create);
router.get("/", scentController.new);
// router.get("/new", scentController.new);
router.get("/:id", scentController.show);
router.put("/:id", scentController.update);

module.exports = router;
