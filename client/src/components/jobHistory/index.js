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
import CheckedCheckbox from '../checkedCheckbox';
import "./style.css";
import CheckedBtn from "../checkedBtn";

function JobHistory(props) {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([])
  const [checked, setChecked] = React.useState(true);
  // const [formObject, setFormObject] = useState({})
 
  // console.log(props)
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
  // // choose a job from the database with a given id, then reloads jobs from the db
  // function chooseJob(job) {
  //   job.userId = props.userId
  //   API.chooseJob(job)
  //     .then(res => loadJobs())
  //     .catch(err => console.log(err));
  // };

  function checkedJob(job) {
    // job.completed = props.completed
    job.checked = true
    API.completedJob(job)
      .then(res => loadJobs())
      .catch(err => console.log(err));
  }


  const handleChange = (event) => {
    console.log(event.target)
    setChecked(event.target.checked);
  }

  // Handles updating component state when the user types into the input field
  // function handleInputChange(event) {
  //   const { name, value } = event.target;
  //   setFormObject({ ...formObject, [name]: value })
  // };

  return (
    <Container fluid>
      <Row>
        <TableContainer className = "container">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell><h4>Job</h4></TableCell>
                <TableCell > <h4>Room</h4></TableCell>
                <TableCell ><h4>Allowance</h4></TableCell>
                <TableCell ><h4>Completed?</h4></TableCell>
                <TableCell ><h4>Checked?</h4></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job =>
                //  props.room === job.room ? 
                //  (
                <TableRow key={job._id} >
                  <TableCell component="th" scope="row">
                   <b>{job.job}</b> 
                  </TableCell>
                  <TableCell >
                    <b>{job.room}</b>
                  </TableCell>
                  <TableCell >
                   <b>${job.price}</b> 
                  </TableCell>
                  <TableCell>
                  {job.completed !== true ? (<b>Needs to be done</b>)
                  :(<b>Ready to check</b>)}
                  </TableCell>
                  <TableCell>
                  {job.checked !== true ? (<CheckedBtn onClick={() => checkedJob(job)} />)
                   :(<b>Job checked</b>)}
                  </TableCell>
                </TableRow>
                // ) : (null)
                //   {/* // )
                // )} */}
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Row>
      <Container maxWidth="sm"> 
      <Link
        to="/dashboardParent"
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
    </Container>
  );
}

export default JobHistory;