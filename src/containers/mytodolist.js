import {connect} from 'react-redux';
import TodoList from '../components/todolist';
import {removeTodo, toggleTodo} from '../actions/index';
const filterMyTodos = (todos = [], filter = 'ALL') => {
    switch (filter) {
        case 'TODO':
            return todos.filter( todo => !todo.completed );
        case 'COMPLETE':
            return todos.filter( todo => todo.completed );
        case 'ALL':
            return todos;
        default:
            return todos;
    }
}
const mapStateToProps = (state) => {
    return {
        todos: filterMyTodos(state.todos, state.activeFilter)
    }
}

const MyTodoList = connect(mapStateToProps, {removeTodo, toggleTodo})(TodoList)

export default MyTodoList;