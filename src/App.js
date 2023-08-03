import React, { useState } from "react";
import PetSearch from "./components/PetSearch";
import PetDetails from "./components/PetDetails";
import PetListing from "./components/PetListing";
import PetForm from "./components/PetForm.js"

const App = () => {
  const [selectedPets, setSelectedPets] = useState([]);

  const handlePetSelect = (pets) => {
    setSelectedPets(pets);
  };
  

  const handleBack = () => {
    setSelectedPets([]);
  };

  return (
    <div>
      <h1>Pet Adoption App</h1>
      <PetSearch onPetSelect={handlePetSelect} />
      {selectedPets.length > 0 ? (
        <>
          {selectedPets.map((pet) => (
            <PetDetails key={pet.id} pet={pet} onBack={handleBack} />
          ))}
        </>
      ) : (
        <>
          <PetListing onPetSelect={handlePetSelect} />
        </>
      )}
      <PetForm />
    </div>
  );
  
};

export default App;
