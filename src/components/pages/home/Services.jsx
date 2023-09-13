import React from 'react'
import './Services.css';
const Services = ({img, title, description}) => {
    
  return (
    <div className="card">
    <div className="card__body">
      <img src={img} className="card__image" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
    </div>
    <button className="card__btn">Read more</button>
  </div>
  )
}

export default Services
