import React from 'react';
import '../css/TodoItem.css';
 
const TodoItem = ({ content, isComplete, id, onToggle, onRemove }) => {
    return (
        // 주의 - onClick = {onToggle(id)} 로 하면 함수가 렌더링 될때 호출이 되며 데이터가 변경되고 변경되면 리렌더링... 무한반복
        <div className="todo-item" onClick={() => onToggle(id)}>
            <div className="todo-item-remove" onClick={(e) => {
                e.stopPropagation();    // onToggle 이 실행되지 않도록 함, 이벤트의 확산을 멈춰줌, 삭제부분에 들어간 이벤트가 부모의 이벤트 까지 전달되지 않도록 해줌
                onRemove(id)}
            }>
                {/* &times; is x mark */}
                &times;
            </div>
            {/* isComplete에 따라서 className에 isComplete 문자열을 추가 (Template literal) */}
            <div className={`todo-item-content ${isComplete ? 'isComplete' : ''}`}>
                <div>
                    {content}
                </div>
            </div>
            {
                isComplete && (<div className="isComplete-mark">✓</div>)
            }
        </div>
    );
};
 
export default TodoItem;