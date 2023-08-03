import React from 'react'

const FavoritePets = ({ favorites }) => {
  return (
    <div>
      <h2>My Favorites</h2>
      <div className="favorites-list">
        {favorites.map((pet) => (
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

export default FavoritePets;
