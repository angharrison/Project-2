const express = require("express");
const router = express.Router();

router.post("/", scentController.create);
router.get("/new", scentController.new);
router.get("/:id", scentController.show);

module.exports = router;
