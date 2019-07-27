import React from 'react';
import Todo from './todo';

export default function todolist({todos, removeTodo, toggleTodo}) {
    return (
        <ul>
        {
            todos.map( (todo) => <Todo key={todo.id} id={todo.id} onClick={toggleTodo} todoItem={todo}/> )
        }
        </ul>
    )
}