import React from 'react';


const Card = (props) => {
  return (
    <div className='card-container'>
        <img src={props.pic} alt="no-img" />
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
    </div>
  )
}

export default Card