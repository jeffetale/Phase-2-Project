import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
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
 
  const handleAddToFavourites = (pet) => {
    setFavourites((previousFavourites) => [...previousFavourites, pet])
  }

  return (
    <Router>
      <div>
        <h1>Pet Adoption App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Pet Search</Link>
            </li>
            <li>
              <Link to="/add">Add a Pet</Link>
            </li>
            <li>
              <Link to="/favourites">My Favourites</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <PetListing onPetSelect={handlePetSelect} onAddToFavourites={handleAddToFavourites} />
            }
          />

          <Route
            path="/search"
            element={
              <>
                <PetSearch onPetSelect={handlePetSelect} />
                {selectedPets.length > 0 ? (
                  <>
                    {selectedPets.map((pet) => (
                      <PetDetails key={pet.id} pet={pet} onAddToFavourites={handleAddToFavourites} />
                    ))}
                  </>
                ) : null}
              </>
            }
          />

          <Route path="/add" element={<PetForm />} />

          <Route path="/favourites" element={<FavouritePets favourites={favourites} />} />

          <Route
            path="/details/:petId"
            element={
              <PetDetailsPage onAddToFavourites={handleAddToFavourites} />
            }
          />
        </Routes>

      </div>
    </Router>
  );
};

const PetDetailsPage = ({ onBack, onAddToFavourites }) => {
  const [pet, setPet] = useState(null);
  const { petId } = useParams();

  useEffect(() => {
    axios
      .get(`https://pets-api-yi52.onrender.com/pets/${petId}`)
      .then((response) => {
        setPet(response.data);
      })
      .catch((error) => {
        console.error("Error fetching pet:", error);
      });
  }, [petId]);

  if (!pet) return null;

  return (
    <PetDetails pet={pet} onAddToFavourites={onAddToFavourites} />
  );
};

export default App;
