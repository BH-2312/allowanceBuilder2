import React, { useState, useEffect } from "react";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

function Bank(props) {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([])
  const [formObject, setFormObject] = useState({})
  console.log(props)
  // Load all jobs and store them with setJobs
  useEffect(() => {
    loadJobs()
  }, [])

  // Loads all jobs and sets them to jobs
  function loadJobs() {
    API.getJobs()
      .then(res =>
        setJobs(res.data)
      )
      .catch(err => console.log(err));
  };
  // choose a job from the database with a given id, then reloads jobs from the db
  function completedJob(job) {
    job.checked = props.checked
    API.completedJob(job)
      .then(res => loadJobs())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  // console.log(userId)
  return (
    <Container fluid>
      <Row>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Job</TableCell>
                <TableCell >Room</TableCell>
                <TableCell >Allowance</TableCell>
                <TableCell >Completed?</TableCell>
                <TableCell >Checked?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => job.userId !== "not assigned" ? (
                <TableRow key={job._id} >
                  <TableCell component="th" scope="row">
                    {job.job}
                  </TableCell>
                  <TableCell >
                    {job.room}
                  </TableCell>
                  <TableCell >
                    ${job.price}
                  </TableCell>
                  <TableCell>
                  <Checkbox
                  checked={job.completed}
                      onChange={completedJob}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                      />
                  </TableCell>
                  <TableCell>
                      {JSON.stringify(job.completed)}
                  </TableCell>
                </TableRow>
              ) : (null)
                // )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Row>
      <Link
        to="/dashboard"
        style={{
          width: "250px",
          borderRadius: "3px",
          letterSpacing: "1.5px"
        }}
        className="btn btn-large waves-effect waves-light hoverable blue accent-3"
      >
        Go To Dashboard
    </Link>
    </Container>
  );
}

export default Bank;