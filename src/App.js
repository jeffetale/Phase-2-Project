import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    setFavourites((previousFavourites) => {
      if (previousFavourites.some((fav) => fav.id === pet.id)) {
        return previousFavourites;
      } else {
        return [...previousFavourites, pet];
      }
    });
  };

  const handleDeletePet = (pet) => {
    setSelectedPets((previousPets) =>
      previousPets.filter((p) => p.id !== pet.id)
    );
    axios
      .delete(`https://pets-api-yi52.onrender.com/pets/${pet.id}`)
      .then((response) => {
        console.log("Pet deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting pet:", error);
      });
  };

  return (
    <Router>
      <Container>
        <Row className="mt-3">
          <Col>
            <h1 className="text-center">Pet Adoption App</h1>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <nav className="d-flex justify-content-end">
              <ul>
                <li>
                  <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/search">Pet Search</NavLink>
                </li>
                <li>
                  <NavLink to="/add">Add a Pet</NavLink>
                </li>
                <li>
                  <NavLink to="/favourites">My Favourites</NavLink>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>

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
                      <PetDetails key={pet.id} pet={pet} onAddToFavourites={handleAddToFavourites} onDelete={handleDeletePet} />
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
              <PetDetailsPage onAddToFavourites={handleAddToFavourites} onDelete={handleDeletePet} />
            }
          />
        </Routes>

      </Container>
    </Router>
  );
};

const PetDetailsPage = ({ onDelete, onAddToFavourites }) => {
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
    <PetDetails pet={pet} onAddToFavourites={onAddToFavourites}  onDelete={onDelete} />
  );
};

export default App;
