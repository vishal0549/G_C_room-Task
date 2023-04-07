import { useState } from 'react'
import B from './B';
import { mySecondContext } from '../globalData/DataProvider';

const A = () => {

    const [ info, setInfo ] = useState("");
    const [ changeData, setChangeData ] = useState("");
    const [ childData, setChildData ] = useState("");

  return (
    <div>
        <h3>A Component</h3>
        <input type="text" placeholder='Enter some Text' onChange={ (e)=> { setInfo(e.target.value) } } />
        <button onClick={ () => setChangeData(info) }>Click me to send data in child Component</button>

        <p>D Comp data : { childData }</p>

        <hr />

        <mySecondContext.Provider value={ { changeData, setChildData } }>
            <B />
        </mySecondContext.Provider>
        
    </div>
  )
}

export default A