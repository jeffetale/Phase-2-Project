import React, { useState } from "react";
import PetSearch from "./components/PetSearch";
import PetDetails from "./components/PetDetails";
import PetListing from "./components/PetListing";
import PetForm from "./components/PetForm.js";
import FavouritePets from "./components/FavouritePets.js";

const App = () => {
  const [selectedPets, setSelectedPets] = useState([]);
  const [favourites, setFavourites] = useState([])

  const handlePetSelect = (pets) => {
    setSelectedPets(pets);
  };

  const handleBack = () => {
    setSelectedPets([]);
  };

  const handleAddToFavourites = (pet) => {
    setFavourites((previousFavourites) => [...previousFavourites, pet])
  }

  return (
    <div>
      <h1>Pet Adoption App</h1>
      <PetSearch onPetSelect={handlePetSelect} />
      {selectedPets.length > 0 ? (
        <>
          {selectedPets.map((pet) => (
            <PetDetails key={pet.id} pet={pet} onBack={handleBack} onAddToFavourites={handleAddToFavourites} />
          ))}
        </>
      ) : (
        <>
          <PetListing onPetSelect={handlePetSelect} onAddToFavorites={handleAddToFavourites} />
        </>
      )}
      <PetForm />
      <FavouritePets favourites={favourites} />

    </div>
  );
};

export default App;
  

