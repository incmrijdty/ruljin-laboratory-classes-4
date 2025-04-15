const express = require("express");

//const { MENU_LINKS } = require("../constants/navigation");

const router = express.Router();

const homeController = require('../controllers/homeController');

router.get("/", homeController.getHomeView);

module.exports = router;
