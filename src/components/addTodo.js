import React from 'react'

export default function addTodo({addnew}) {
    let todoInput;
    return (
        <div className="addtodo">
            <input 
                ref={ (node) => {todoInput = node} } 
                onKeyUp={ 
                    (evt) => {
                        if( +evt.keyCode === 13 ) {
                            addnew(todoInput.value);
                            todoInput.value = '';
                        }
                    } 
                }
            />
            <button onClick={
                () => {
                    addnew(todoInput.value);
                    todoInput.value = '';
                }
            } >Add</button>
        </div>
    )
}
