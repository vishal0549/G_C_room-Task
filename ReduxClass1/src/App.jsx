import { useId } from 'react'
import InputComp from './components/InputComp'

const App = () => {

  const id = useId();
  console.log(id);
  return (
    <div>
      {/* <InputComp /> */}hi
    </div>
  )
}

export default App
