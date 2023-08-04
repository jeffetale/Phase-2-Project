import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";

const PetSearch = ({ onPetSelect }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    axios
      .get("https://pets-api-yi52.onrender.com/pets")
      .then((response) => {
        //{ used a type of and filter to remove numerics }
        const filteredPets = response.data.filter((pet) =>
          Object.values(pet)
            .filter((value) => typeof value === "string")
            .some((value) =>
              value.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
        onPetSelect(filteredPets);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <Container>
      <h2>Pet Search</h2>
      <Form className="search-form">
        <Form.Group controlId="formSearch">
          <Form.Control
            type="text"
            placeholder="Search pets"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default PetSearch;
