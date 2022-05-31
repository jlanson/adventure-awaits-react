import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className="cards__item">
        <Link to = {props.path} className="cards__item__link">
            <figure className="cards__item__pic-wrap" data-category={props.label}>
                <img src={props.src} className="cards__item__img"/>
            </figure>
            <figure className="cards__item__info">
                <h5 className="cards__item__text">{props.text}</h5>
            </figure>
        </Link>
    </li>
    </>
  )
}

export default CardItem;