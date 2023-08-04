import React from 'react'

const FavouritePets = ({ favourites }) => {
  return (
    <div>
      <h2>My Favourites</h2>
      <div className="favourites-list">
        {favourites.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouritePets;
