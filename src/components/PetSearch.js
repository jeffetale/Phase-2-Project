import React, { useState } from "react";
import axios from "axios";

const PetSearch = ({ onPetSelect }) => {
  const [searchCriteria, setSearchCriteria] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get("https://pets-api-yi52.onrender.com/pets", {
        params: searchCriteria,
      })
      .then((response) => {
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div>
      <h2>Pet Search</h2>
      <div className="search-form">
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="search-results">
        {searchResults.map((result) => (
          <div key={result.id} className="result-card">
            <img src={result.image} alt={result.name} />
            <h3>{result.name}</h3>
            <p>Breed: {result.breed}</p>
            <p>Age: {result.age}</p>

            <button onClick={() => onPetSelect(result)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetSearch;
