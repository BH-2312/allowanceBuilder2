import axios from "axios";

export default {
  // Gets all jobs
  getJobs: function () {
    console.log("get is working")
    return axios.get("/api/jobRoutes/jobs");
  },
  // Gets the job with the given id
  getJob: function (id) {
    return axios.get("/api/jobRoutes/jobs/" + id);
  },
  // Deletes the job with the given id
  deleteJob: function (id) {
    return axios.delete("/api/jobRoutes/jobs/" + id);
  },
  // Saves a job to the database
  saveJob: function (jobData) {
    console.log(jobData)
    console.log("post is working")
    return axios.post("/api/jobRoutes/jobs", jobData);
  },
  //Adds user to the job
  chooseJob: function (job) {
    console.log("choose is working")
    return axios.put("/api/jobRoutes/jobs/" + job._id, job);
  },
  //kid completes job
  completedJob: function (job) {
    return axios.put("/api/jobRoutes/jobs/" + job._id, job);
  },
  //parent checks job
  checkedJob: function (job) {
    return axios.put("/api/jobRoutes/jobs/" + job._id, job);
  },
};
