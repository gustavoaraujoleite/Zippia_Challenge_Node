/**
 * Component responsible for the Job Controller to fetch data and render specific route
 */

const fetch = require("node-fetch");
exports.getJobs = async (req, res, next) => {
  const URL = "https://www.zippia.com/api/jobs/";
  const params = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 20,
    previousListingHashes: [],
  };

  const customHeaders = {
    "Content-Type": "application/json",
  };

  //Fetching data
  fetch("https://www.zippia.com/api/jobs/", {
    method: "POST",
    body: JSON.stringify(params),
    headers: customHeaders,
  })
    .then((response) => response.json())
    .then((result) =>

    //Render page from 'test/jobs' route and saving the data into a variable for fetching it into EJS file
      res.render("test/jobs", {
        jobs: result.jobs.slice(1, 11),
        // path: "/",
      })
    )
    .catch((err) => console.log(err));
};
