/**
 * Component responsible routing the specific route and redirect it to the controller
 */

const express = require("express");

const jobsController = require("../controllers/jobsController");

const router = express.Router();

router.get("/test/jobs", jobsController.getJobs);

module.exports = router;
