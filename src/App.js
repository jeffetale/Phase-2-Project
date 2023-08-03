import React, { useState } from 'react';
import PetSearch from './PetSearch';
import PetDetails from './PetDetails';
import PetListing from './PetListing';

const App = () => {
  const [selectedPet, setSelectedPet] = useState(null);

  const handlePetSelect = (pet) => {
    setSelectedPet(pet);
  };

  return (
    <div>
      <h1>Pet Adoption App</h1>
      <PetSearch />
      {selectedPet ? (
        <PetDetails pet={selectedPet} />
      ) : (
        <PetListing onPetSelect={handlePetSelect} />
      )}
    </div>
  );
};

export default App;
