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

            <TodoItem items={ data } />

        </div>
    </>
  )
}

export default AddTodo