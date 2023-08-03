import React, { useState } from "react";
import PetSearch from "./components/PetSearch";
import PetDetails from "./components/PetDetails";
import PetListing from "./components/PetListing";

const App = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
  };

  const handleBack = () => {
    setSelectedPet(null);
  };

  return (
    <div>
      <h1>Pet Adoption App</h1>
      <PetSearch onPetSelect={handlePetSelect} />
      {selectedPet ? (
        <>
          <PetDetails pet={selectedPet} onBack={handleBack} />
        </>
      ) : (
        <>
          <PetListing onPetSelect={handlePetSelect} />
        </>
      )}
    </div>
  );
};

export default App;
