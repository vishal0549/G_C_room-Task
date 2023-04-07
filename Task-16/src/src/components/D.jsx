import { useContext } from 'react';
import { mySecondContext } from '../globalData/DataProvider';

const D = () => {

    const dataFromA = useContext(mySecondContext);

  return (
    <div>
        <h3>D Components</h3>

        <p style={{ color: "blue" }}>Data from A : { dataFromA }</p>

    </div>
  )
}

export default D;