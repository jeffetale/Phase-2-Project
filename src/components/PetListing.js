import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const PetListing = ({ onPetSelect }) => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://pets-api-yi52.onrender.com/pets")
      .then((response) => {
        setPets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pets:", error);
      });
  }, []);

  const handleViewDetails = (pet) => {
    navigate(`/details/${pet.id}`);
  };

  return (
    <div>
      <h2>Pet Listings</h2>
      <Row xs={1} md={2} lg={3}>
        {pets.map((pet) => (
          <Col key={pet.id}>
            <Card>
              <Card.Img
                variant="top"
                src={pet.image}
                alt={pet.name}
                style={{ heinght: "200px", width: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>Breed: {pet.breed}</Card.Text>
                <Card.Text>Age: {pet.age}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleViewDetails(pet)}
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PetListing;
