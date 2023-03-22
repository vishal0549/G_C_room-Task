import TodoItem from "./TodoItem";
import { useState } from 'react';

const AddTodo = () => {

const [state, setState] = useState("");
const [ data, setData ] = useState([]);

const addTodoItem = () => {

    var newItem = {
        title: state,
        status: false,
    }

    setData([ ...data, newItem ]);
}

const handleToggle = (idx) => {
    var filterTask = data.map( (item, i) => {
        return (
            idx === i ? {...item, status: !item.status} : item
        )
    })
    setData(filterTask);
}

const deleteItem = (idx) => {
    var filteredData = data.filter( (item, i) => {
        return idx != i;
    })
    setData(filteredData);
}

  return (
    <>
        <div style={{ marginTop: "100px" }}>

            <h2>Todo Example</h2>

            <input type="text" 
                value={ state } 
                placeholder="Enter Some Text" 
                onChange={ (e) => setState( e.target.value ) } 
            />
            
            <button onClick={ addTodoItem }>Add Item</button>

            <TodoItem items={ data } deleteItem={ deleteItem } handleToggle={ handleToggle } />

        </div>
    </>
  )
}

export default AddTodo