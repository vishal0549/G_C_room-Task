import { useState, useEffect } from 'react';
import Table from './components/Table';

const App = () => {

const [state, setState] = useState([]);

useEffect(() => {
  fetch("https://randomuser.me/api/?results=20")
  .then(res => res.json())
  .then(data => setState(data.results));
}, [])

  return (
    <>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          
            {
              state.map((e, idx) => {
                return (
                  <Table key={ idx } photo={ e.picture.medium } name={ `${e.name.first} ${e.name.last}` } gender={ e.gender } email={ e.email } city={ e.location.city } />
                )
              })
            }  
          
        </table>   
      </div>
    </>
  )
}

export default App