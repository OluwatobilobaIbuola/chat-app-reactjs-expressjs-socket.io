const router = require("express").Router();
const { addMessage, getMessages } = require("../controller/message.controller");

router.post("/", addMessage);
router.get("/:from/:to", getMessages);

module.exports = router;
