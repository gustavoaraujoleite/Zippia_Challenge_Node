const express = require("express");

const jobsController = require("../controllers/jobsController");

const router = express.Router();

router.get("/test/jobs", jobsController.getJobs);

module.exports = router;
