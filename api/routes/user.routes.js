const { getAllUsers, setImage } = require("../controller/user.controller");
const router = require("express").Router();

router.get("/get_users/:id", getAllUsers);
router.post("/set_image/:id", setImage);

module.exports = router;
