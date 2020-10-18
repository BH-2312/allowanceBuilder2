import React, { useState, useEffect } from "react";
import DeleteBtn from "../DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../../utils/API"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";

function AddJob() {
  // Setting our component's initial state
  const [jobs, setJobs] = useState([])
  const [formObject, setFormObject] = useState({})

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
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveJob method to save the job data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.job && formObject.price) {
      API.saveJob({
        job: formObject.job,
        price: formObject.price
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
                placeholder="Price"
              />
              <FormBtn
                disabled={!(formObject.job && formObject.price)}
                onClick={handleFormSubmit}
              >
                Add job
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            {/* <Jumbotron>
              <h1>Jobs On My List</h1>
            </Jumbotron> */}
            {jobs.length ? (
              <List>
                {jobs.map(job => (
                  <ListItem key={job._id}>
                    <Link to={"/jobs/" + job._id}>
                      <strong>
                        {jobs.job} for {jobs.price}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteJob(job._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default AddJob;
