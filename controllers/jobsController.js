const axios = require("axios");

exports.getJobs = async (req, res, next) => {
  try {
    const result = await axios.post("https://www.zippia.com/api/jobs/", {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: [],
    });

    const data = result.data.jobs;

    res.render("test/jobs", {
      jobs: data.slice(0, 10),
      path: "/jobs",
    });
    next();
  } catch (err) {
    console.log("Request failed");
  }
};
