import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Image } from "react-bootstrap";

const PetDetails = ({ pet, onAddToFavourites }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <h2>{pet.name} Details</h2>
      <div className="pet-details">
        <Image src={pet.image} alt={pet.name} fluid />
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Size: {pet.size}</p>
        <p>Description: {pet.description}</p>
      </div>

      <Button variant="secondary" onClick={handleBack}>
        Back to Listings
      </Button>

      <Button variant="primary" onClick={() => onAddToFavourites(pet)}>
        Add to Favourites
      </Button>
    </Container>
  );
};

export default PetDetails;
