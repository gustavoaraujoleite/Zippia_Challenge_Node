const fetch = require("node-fetch");
exports.getJobs = async (req, res, next) => {
  let data = [];
  // try {
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

  fetch("https://www.zippia.com/api/jobs/", {
    method: "POST",
    body: JSON.stringify(params),
    headers: customHeaders,
  })
    .then((response) => response.json())
    .then((result) =>
      res.render("test/jobs", {
        jobs: result.jobs,
        // path: "/",
      })
    )
    .catch((err) => console.log(err));

  // const result = await axios.post("https://www.zippia.com/api/jobs/", {
  //   companySkills: true,
  //   dismissedListingHashes: [],
  //   fetchJobDesc: true,
  //   jobTitle: "Business Analyst",
  //   locations: [],
  //   numJobs: 20,
  //   previousListingHashes: [],
  // });

  // data = await result.data.jobs;
  // return res.render("test/jobs", {
  //   jobs: data.slice(0, 10),
  //   path: "/jobs",
  // });
  // } catch (err) {
  //   console.log("Request failed");
  // }
};
