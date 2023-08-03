import React, { useState } from "react";
import axios from "axios";

const PetSearch = ({ onPetSelect }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    axios
      .get("https://pets-api-yi52.onrender.com/pets", {
        params: { q: searchValue },
      })
      .then((response) => {
        onPetSelect(response.data);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div>
      <h2>Pet Search</h2>
      <div className="search-form">
        <input
          type="text"
          placeholder="Search pets"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};


export default PetSearch;
