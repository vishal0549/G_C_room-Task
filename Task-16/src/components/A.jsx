import { useState } from 'react'
import B from './B';
import { mySecondContext } from '../globalData/DataProvider';

const A = () => {

    const [ info, setInfo ] = useState("");
    const [ changeData, setChangeData ] = useState("");

  return (
    <div>
        <h3>A Component</h3>
        <input type="text" placeholder='Enter some Text' onChange={ (e)=> { setInfo(e.target.value) } } />
        <button onClick={ () => setChangeData(info) }>Click me</button>

        <hr />
        <hr />

        <mySecondContext.Provider value={ changeData }>
            <B />
        </mySecondContext.Provider>
        
    </div>
  )
}

export default A