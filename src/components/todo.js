import React from 'react'

export default function todo({todoItem, onClick, id}) {
    return (
        <li onClick={()=>onClick(id)} className={todoItem.completed ? 'completed' : 'uncompleted'}>
            <span className={todoItem.completed ? 'completed' : 'uncompleted'}></span>
            {todoItem.todo} 
        </li>
    )
}
