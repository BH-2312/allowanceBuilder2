const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/jobRoutes");

// API Routes
router.use("/api/jobRoutes", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
