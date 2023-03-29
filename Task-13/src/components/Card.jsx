import React from 'react'

const Card = ({ title, price, image }) => {
  return (
    <div className='card-container'>
        <div className="card-top">
            <img src={ image } alt="no-img" />
        </div>
        <div className="card-bottom">
            <h5>{ title }</h5>
            <p>₹ { price }</p>
            <div className="card-btn">Click me</div>
        </div>
    </div>
  )
}

export default Card