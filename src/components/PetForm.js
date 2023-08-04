import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

const PetForm = () => {
  const [petData, setPetData] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://pets-api-yi52.onrender.com/pets", petData)
      .then((response) => {
        console.log(response.data);
        setPetData({
          name: "",
          breed: "",
          age: "",
          gender: "",
          size: "",
          image: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h2>Add a Pet</h2>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBreed">
          <Form.Label>Breed:</Form.Label>
          <Form.Control
            type="text"
            name="breed"
            value={petData.breed}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={petData.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formGender">
          <Form.Label>Gender:</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={petData.gender}
            onChange={handleChange}
          >
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formSize">
          <Form.Label>Size:</Form.Label>
          <Form.Control
            as="select"
            name="size"
            value={petData.size}
            onChange={handleChange}
          >
            <option value="">--Select Size--</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image URL:</Form.Label>
          <Form.Control
            type="text"
            name="image"
            value={petData.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={petData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Pet
        </Button>
      </Form>
    </Container>
  );
};

export default PetForm;
