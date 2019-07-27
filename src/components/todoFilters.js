import React from 'react';
import FilterLink from './filterlink';

export default function todoFilters({activeFilter, filterTodo}) {
    return (
        <div className="footer">
            <FilterLink activeFilter={activeFilter} onClickFilter={filterTodo} actionType='ALL'>ALL</FilterLink>{' '}
            <FilterLink activeFilter={activeFilter} onClickFilter={filterTodo} actionType='TODO'>TO DO</FilterLink>{' '}
            <FilterLink activeFilter={activeFilter} onClickFilter={filterTodo} actionType='COMPLETE'>COMPLETED</FilterLink>
        </div>
    )
}
