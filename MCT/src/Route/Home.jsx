import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData } from '../Redux/Action'

const Home = () => {

  const [ apiData, setApiData ] = useState([]);
  const data = useSelector((storeData) => {
    return storeData.blogs;
  });
  console.log(data.blogs)

  useEffect(() => {
    fetch("https://reqres.in/api/users")
    .then(res => res.json())
    .then(result => setApiData(result.data));
  }, []);
  console.log(apiData);

  return (
    <div className='home-container container-fluid'>
      <div className='row'>
        
        {
          data.length > 0 ? (
            <>
              <p>New Added blog post</p>
              {
                data.map((e) => { 
                  return (
                    <div className="card w-25 my-3 mx-5" >
                      <div className="card-header" style={{ display: "flex", justifyContent: "center", minHeight: "5rem"}}><h4>{ e.title }</h4></div>
                      <div className="card-body" style={{}}>{ e.description }</div>
                      <div className="card-footer text-center">
                        <button className='btn'>Read more</button>
                      </div>
                    </div>
                  )
                })
              }
            </>
         ) : <h2>No recent Blog</h2>
        }
        
      </div>

      <div className="row">
      {
          apiData.map(e => {
            return (
              <div className='card w-25 m-5' key={e.id}>
                <div className='card-header' style={{ display: "flex", justifyContent: "center", height: "12rem", backgroundRepeat: "no-repeat", backgroudSize: "contains", background: "url('data:image/jpeg;base64,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')"}}>
                  <img src={e.avatar} className='card-image' alt="no-img" style={{borderRadius: "50%", width: "4rem", height: "4rem", position: "absolute", top: "165px"}} />                  
                </div>
                <div className="card-body text-center pt-5">
                  <h3>{e.first_name} {e.last_name}</h3>
                  <p>{e.email}</p>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem, ipsum dolor.</p>
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="card-footer text-center">
                    <button className='btn'>Read more</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home