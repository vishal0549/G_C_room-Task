import React from 'react'

const TodoItem = ({ items, deleteItem, handleToggle }) => {
  return (
    <>
        <div>
            <h1>Todo Items</h1>
            {
                items.map(( item, idx ) => {
                    return (
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h4>{ item.title }</h4>&nbsp;&nbsp;
                            <h5 style={{ color: "red" }}>
                                {
                                    item.status ? "Completed" : "Not Completed"
                                }
                            </h5>&nbsp;&nbsp;
                            <button onClick={ () => { handleToggle(idx) }}>Toggle</button>&nbsp;&nbsp;&nbsp;
                            <button onClick={ () => { deleteItem(idx) } }>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default TodoItem;