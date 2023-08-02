import React from "react";

const PetDetails = ({ pet }) => {
  return (
    <div>
      <h2>{pet.name} Details</h2>
      <div className="pet-details">
        <img src={pet.image} alt={pet.name} />
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Description: {pet.description}</p>
      </div>
    </div>
  );
};

export default PetDetails;
