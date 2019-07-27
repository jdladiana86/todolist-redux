import {connect} from 'react-redux';
import todoFiltersComponent from '../components/todoFilters';
import {filterTodo} from '../actions';

function mapStateToProps(state, ownProps) {
    return {
        activeFilter: state.activeFilter
    };
}

const methods = {
    filterTodo
}

export default connect(mapStateToProps, methods)(todoFiltersComponent)