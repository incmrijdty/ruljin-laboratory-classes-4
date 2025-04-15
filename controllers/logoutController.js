const { LOGOUT_LINKS } = require("../constants/navigation");

const getLogoutView = (req, res) => {
    res.render("logout.ejs", {
        headTitle: "Shop - Logout",
        path: "/logout",
        activeLinkPath: "/logout",
        menuLinks: LOGOUT_LINKS,
      });
  };

  const logger = require("../utils/logger");

  const getProcessLog = () => {
    logger.getProcessLog();
    process.exit();
  }

  module.exports = { 
    getLogoutView,
    getProcessLog
   };