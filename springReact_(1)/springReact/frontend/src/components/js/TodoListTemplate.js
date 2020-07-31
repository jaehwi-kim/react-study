import React from 'react';
import '../css/TodoListTemplate.css';
 
// 함수형 컴포넌트 props(destructured) as parameters
const TodoListTemplate = ({ form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="todo-list-title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todoItemList-wrapper">
                {children}
            </section>
        </main>
    );
};
 
export default TodoListTemplate;