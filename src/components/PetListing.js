import React, { useState, useEffect } from "react";
import axios from "axios";

const PetListing = ({ onPetSelect }) => {
  const [pets, setPets] = useState([]);

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

  return (
    <div>
      <h2>Pet Listings</h2>
      <div className="pet-listings">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>

            <button onClick={() => onPetSelect([pet])}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetListing;
