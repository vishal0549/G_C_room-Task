import { useContext } from 'react';
import { AppContext } from '../globalData/DataProvider';
import GrandChild from './GrandChild';

const Child = () => {

    const { data, data1 } = useContext(AppContext);

  return (
    <div>
        <p>{ data.name } -- { data.age }</p>

        <p>{ data1.name } --- {data1.age }</p>

        <GrandChild />
    </div>
  )
}

export default Child;