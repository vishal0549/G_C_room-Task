import { createContext, useState } from 'react'

const AppContext = createContext();

const DataProvider = ({ children }) => {

    const data = {
        name: "Jones",
        age: 22,
    };

    const data1 = {
      name: "Daniel",
      age: 21,
    }

    const [ state, setState ] = useState(0);

  return (
    <AppContext.Provider value={ { data, data1, state, setState } }>
        { children }
    </AppContext.Provider>
  )
}

export { AppContext, DataProvider };