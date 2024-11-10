
	
import React from "react";

function PlantCard({plant, onUpdatePlant}) {

  const handleSoldOutClick = () => {
    const updatedPlant = {...plant, soldOut: true};
    onUpdatePlant(updatedPlant);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || " http://localhost:6001/plants"} alt={plant.name || "Plant"} />
      <h4>{plant.name || "Unnamed Plant"}</h4>
      <p>Price: {plant.price || "Unknown"}</p>
      {plant.soldOut ? (
        <button className="sold-out">Out of Stock</button>
      ) : (
        <button className="primary" onClick={handleSoldOutClick}>In Stock</button>
      )}
    </li>
  );
}

export default PlantCard;