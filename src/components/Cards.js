import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards_wrrapper">
                <ul className="cards_items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="Explore stuff"
                    label="Adventure"
                    path="/services"
                    />
                    <CardItem 
                    src="images/img-2.jpg"
                    text="Explore more stuff"
                    label="Luxury"
                    path="/services"
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;