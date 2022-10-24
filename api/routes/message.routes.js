const router = require("express").Router();
const { addMessage } = require("../controller/message.controller");

router.post("/", addMessage);

module.exports = router;
