import React, { Component } from 'react';

function TodoItem(props) {
    return (
        <div>
            {props.todo.text}
            {props.color}
        </div>
    );
}

export default TodoItem;