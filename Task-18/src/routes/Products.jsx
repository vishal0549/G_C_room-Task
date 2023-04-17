import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setProducts(data);
    })
  }, [])

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ color: "green" }}>Products</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae atque est nam nostrum, alias earum blanditiis provident dolor! Perferendis, quae et porro ducimus fugiat architecto aut. Aut, quisquam sint voluptatem quasi cupiditate dolorem vero earum debitis facilis sit repellat! Voluptatem molestiae inventore assumenda corrupti doloribus optio exercitationem quae quo voluptatibus dicta tenetur placeat similique, cupiditate distinctio architecto eaque. 
      </p>

      {
        products.length > 0 ? <div className='card-container'>
          
            {
              products.map((elm) => {
                return (
                  <div className='cardStyle' key={elm.id}>
                    <img src={ elm.image } alt="" width="200" height="200" />
                    <h4>{ elm.title }</h4>
                    <p>$ { elm.price }</p>

                    <Link to={ `/productdetails/${ elm.id }` }>
                      <button>Show details</button>
                    </Link>

                  </div>
                )
              })
            }

          </div>
        :
          <h2 style={ { color: "red", textAlign: "center", marginTop: "100"}}>
            No Product to Display
          </h2>
      }

    </div>
  )
}

export default Products