import React from 'react';
import TodoItem from './TodoItem';
 
const TodoItemList = ({ todos, onToggle, onRemove }) => {
    const todoList = todos.map(
        ({id, content, isComplete}) => (
            <TodoItem
                id={id}
                content={content}
                isComplete={isComplete}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
            />
        )
    );
    return (
        <div>
            {todoList}
        </div>
    );
};
 
export default TodoItemList;