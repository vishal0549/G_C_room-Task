import React from 'react'

const TodoItem = ({ items }) => {
  return (
    <>
        <div>
            <h1>Todo Items</h1>
            {
                items.map(( item ) => {
                    return (
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <h4>{ item.title }</h4>&nbsp;&nbsp;
                            <h5 style={{ color: "red" }}>
                                {
                                    item.status ? "Completed" : "Not Completed"
                                }
                            </h5>&nbsp;&nbsp;
                            <button>Toggle</button>&nbsp;&nbsp;&nbsp;
                            <button>Delete</button>
                            <p>check</p>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default TodoItem;