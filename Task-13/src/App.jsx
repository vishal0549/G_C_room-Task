import { useState, useEffect } from 'react';
import Card from './components/Card';

const App = () => {

const [state, setState] = useState([]);

useEffect(() => {
  fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => setState(data));
}, [])

  return (
    <>
      <div className="container">
        {
          state.map((e, idx) => {
            return (
              <Card key={ e.id } title={ e.title } price={ e.price } image={ e.image } />
            )
          })  
        }     
      </div>
    </>
  )
}

export default App