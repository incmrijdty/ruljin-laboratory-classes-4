const express = require("express");

//const { LOGOUT_LINKS } = require("../constants/navigation");

const router = express.Router();

const logoutController = require('../controllers/logoutController');

router.get("/", logoutController.getLogoutView);

module.exports = router;
