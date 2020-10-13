import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Animals() {
  const [animals, setAnimals] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadAnimals()
  }, [])

  function loadAnimals() {
    API.getAnimals()
      .then(res => 
        setAnimals(res.data)
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBook({
        title: formObject.title,
        author: formObject.author,
        synopsis: formObject.synopsis
      })
        .then(res => loadAnimals())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Submit Your Report of Lost Animal</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name"
              />
              <Input
                onChange={handleInputChange}
                name="species"
                placeholder="Species"
              />
              <Input
                onChange={handleInputChange}
                name="age"
                placeholder="Age"
              />
              <Input
                onChange={handleInputChange}
                name="location"
                placeholder="Location"
              />
              <TextArea
                onChange={handleInputChange}
                name="description"
                placeholder="How to Approach Your Animal"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {animals.length ? (
              <List>
                {animals.map(animal => (
                  <ListItem key={animal._id}>
                    <Link to={"/animals/" + animal._id}>
                      <strong>
                        {animal.name} by {animal.species}
                      </strong>
                    </Link>
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


export default Animals;
