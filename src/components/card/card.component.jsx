import React from "react";
import './card.styles.css';

function Card({robot}) {
  return (
    <div className='card-container'>
      <img
        alt="robot"
        src={`https://robohash.org/${robot.id}?set=set3&size=180x180`}
      />
      <h2> {robot.name} </h2>
      <p> {robot.email} </p>
    </div>
  );
}

export default Card;
