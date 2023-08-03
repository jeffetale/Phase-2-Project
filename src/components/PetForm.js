import React, { useState } from "react";
import axios from "axios";

const PetForm = () => {
  const [petData, setPetData] = useState({
    name: "",
    breed: "",
    age: "",
    gender: "",
    size: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://pets-api-yi52.onrender.com/pets", petData)
      .then((response) => {
        console.log(response.data);
        setPetData({
          name: "",
          breed: "",
          age: "",
          gender: "",
          size: "",
          image: "",
          description: "",
        });
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Pet</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={petData.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={petData.breed}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={petData.age}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Gender:
          <select name="gender" value={petData.gender} onChange={handleChange}>
            <option value="">--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Size:
          <select name="size" value={petData.size} onChange={handleChange}>
            <option value="">--Select Size--</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={petData.image}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={petData.description}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">Add Pet</button>
    </form>
  );
};

export default PetForm;
