const express = require("express");
const router = express.Router();
const userController = require('../controllers/M1S6_Ex06-controller.js');

router.post("/createNewUser", userController.createNewUser);
router.delete("/deleteUser/:id?", userController.deleteUser);

module.exports = router;