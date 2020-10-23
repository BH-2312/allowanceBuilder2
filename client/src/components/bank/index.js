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
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
import CompletedBtn from "../completedBtn";
import "./style.css";
// var nodemailer = require('nodemailer');
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Bank(props) {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([])
  const [formObject, setFormObject] = useState({})
  // const [checked, setChecked] = React.useState(true);

  const classes = useStyles();

//   transporter.verify(function(error, success) {
//     if (error) {
//          console.log(error);
//     } else {
//          console.log('Server is ready to take our messages');
//     }
//  });

  // var message = {
  //   from: "benhilliard23@hotmail.com",
  //   to: "receiver@sender.com",
  //   subject: "Message title",
  //   text: "Plaintext version of the message",
  //   html: "<p>HTML version of the message</p>"
  // };

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
    // job.completed = props.completed
    job.completed = true
    API.completedJob(job)
      .then(res => loadJobs())
      .catch(err => console.log(err));
  }

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  // console.log(userId)
  return (
    <Container fluid >
      <Row >
        <TableContainer className = "container">
          <Table aria-label="simple table" className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell><h4>Job</h4></TableCell>
                <TableCell ><h4>Room</h4></TableCell>
                <TableCell ><h4>Allowance</h4></TableCell>
                <TableCell ><h4>Completed?</h4></TableCell>
                <TableCell ><h4>Checked?</h4></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {jobs.map((job) => job.userId !== "not assigned" ? (
                <TableRow key={job._id} >
                  <TableCell component="th" scope="row">
                  <b> {job.job}</b> 
                  </TableCell>
                  <TableCell >
                  <b>  {job.room}</b>
                  </TableCell>
                  <TableCell >
                  <b>  ${job.price}</b>
                  </TableCell>
                  <TableCell>
                  {job.completed !== true ? (<CompletedBtn onClick={() => completedJob(job)} />)
                  :(<b> Job finished</b>)}
                  </TableCell>
                  <TableCell>
                  {job.checked !== true ? (<b>Not yet...</b>)
                  :(<b>Well done!</b>)}
                  </TableCell>
                </TableRow>
              ) : (null)
                // )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Row>
      <Container maxWidth="sm" justifyContent = "center"> 
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
    </Container>
  );
}

export default Bank;