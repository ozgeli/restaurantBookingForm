import React from 'react';
import './main.scss';

const Main = () => {
  return (
    <div className="main-container">
        <div className="main-left">
            <div className="left-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className= "btn-reserveTable">Reserve a Table</button>
            </div>
        </div>
        <div className="main-right">
            
            <img className="main-img" alt="restaurantfood" src="../assets/restauranfood.jpg"/>
           
        </div>

    </div>
  )
}

export default Main