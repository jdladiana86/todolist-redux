import {connect} from 'react-redux';
import { addTodo } from '../actions';
import addTodoComponent from '../components/addTodo';

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addnew: (todo) => {
//             dispatch(addTodo(todo))
//         }
//     };
// }

// export default connect(null, mapDispatchToProps)(addTodoComponent);

const methods = {
    addnew: addTodo
}

export default connect(null, methods)(addTodoComponent)