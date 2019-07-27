import Axios from "axios";
import { APIURL } from "../config/config";

export const getTodos = () => {
    return {
        type: 'TODOS',
        payload: Axios.get(APIURL)
    }
}
export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            text: todo,
            completed: false
        }
    }
}
export const toggleTodo = (i) => {
    return {
      type: 'TOGGLE_TODO',
      id: i
    }
}
export const removeTodo = (i) => {
    return {
      type: 'REMOVE_TODO',
      id: i
    }
}
export const filterTodo = (filter = 'ALL') => {
    return {
        type: 'SET_FILTER',
        activeFilter: filter
    }
}