const router = require("express").Router();
const jobRoutes = require("../jobRoutes/jobs");

// Job routes
router.use("/jobRoutes/jobs", jobRoutes);

module.exports = router;
