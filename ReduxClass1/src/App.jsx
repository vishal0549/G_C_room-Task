import { useid } from 'react'
import InputComp from './components/InputComp'

const App = () => {

  const id = useid();
  console.log(id);
  return (
    <div>
      {/* <InputComp /> */}hi
    </div>
  )
}

export default App