import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";
// import Job from "../../../../models/job";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function AddJob(props) {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([])
  const [formObject, setFormObject] = useState({})
  // console.log({...props})

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

  // Deletes a job from the database with a given id, then reloads jobs from the db
  function deleteJob(id) {
    API.deleteJob(id)
      .then(res => loadJobs())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveJob method to save the job data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.job && formObject.price) {
      API.saveJob({
        job: formObject.job,
        price: formObject.price,
        room: props.room
      })
        .then(res => loadJobs())
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <form>
            <Input
              onChange={handleInputChange}
              name="job"
              placeholder="Job"
            />
            <Input
              onChange={handleInputChange}
              name="price"
              placeholder="Price ($)"
            />
            <FormBtn
              disabled={!(formObject.job && formObject.price)}
              onClick={handleFormSubmit}
            >
              Add job
              </FormBtn>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Job</TableCell>
                  <TableCell >Allowance</TableCell>
                  <TableCell >Completed</TableCell>
                  <TableCell >Delete?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {jobs.length > 0 ? ("value for true") : ("value for valse") */}
                {jobs.map((job) => props.room === job.room ? (
                  <TableRow key={job._id}>
                    <TableCell component="th" scope="row">
                      {job.job}
                    </TableCell>
                    <TableCell >
                      ${job.price}
                    </TableCell>
                    <TableCell >
                      {JSON.stringify(job.completed)}
                    </TableCell>
                    <TableCell>
                      <DeleteBtn onClick={() => deleteJob(job._id)} />
                    </TableCell>
                  </TableRow>
                ) : (null)
                  // )
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Col>
      </Row>
    </Container>
  );
}


export default AddJob;
