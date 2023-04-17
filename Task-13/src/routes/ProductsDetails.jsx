import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductsDetails = () => {

  const { id } = useParams();

  const [ state, setState ] = useState({
    id: 0,
    title: '',
    description: '',
    image: '',
    price: 0,
    categories: '',
  });

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ id }`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setState(data);
    })
  }, [])

  return (
    <div style={ { textAlign: 'center', marginTop: "100px" } }>
        <h2>{ state.category }</h2>
        <img src={ state.image } width='300' height='300' />
        <p>{ state.title }</p>
        <br />
        <p>{ state.description }</p>
        <br />
        <p>$ { state.price }</p>
    </div>
  )
}

export default ProductsDetails;