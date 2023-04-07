import { useContext, useState } from 'react';
import { mySecondContext } from '../globalData/DataProvider';

const D = () => {

    const { changeData, setChildData } = useContext(mySecondContext);
    const [ sendData, setSendData ] = useState("");

  return (
    <div>
        <h3>D Components</h3>

        <p style={{ color: "blue" }}>Data from A : { changeData }</p>

        <hr />

        <input type="text" placeholder="Enter something to send parent" onChange={ (e) => setSendData(e.target.value) } />
        <button onClick={ () => setChildData(sendData) }>Click me to send data to A Component</button>

    </div>
  )
}

export default D;