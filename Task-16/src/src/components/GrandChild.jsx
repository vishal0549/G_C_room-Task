import { useContext } from 'react';
import { AppContext } from '../globalData/DataProvider';

const GrandChild = () => {

    const { data1, state, setState } = useContext(AppContext);

  return (
    <div>
        <p>Grand Child</p>
        <h1>{ data1.name }</h1>
        <h4>Score - { state }</h4>
        <button onClick={ () => setState(state+1) }>Click me</button>
    </div>
  )
}

export default GrandChild