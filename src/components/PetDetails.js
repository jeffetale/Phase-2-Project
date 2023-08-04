import React from "react";

const PetDetails = ({ pet, onBack, onAddToFavourites }) => {
  return (
    <div>
      <h2>{pet.name} Details</h2>
      <div className="pet-details">
        <img src={pet.image} alt={pet.name} />
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Size: {pet.size}</p>
        <p>Description: {pet.description}</p>
      </div>

      <button onClick={onBack}>Back to Listings</button>

      
      <button onClick={() => onAddToFavourites(pet)}>Add to Favourites</button>
    </div>
  );
};

export default PetDetails;
