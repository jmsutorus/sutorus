import React, { Component } from 'react';
import TodoItem from './TodoItem';

function getColor(categories, cate) {
    let color = 'grey';
    for (let i = 0; i < categories.length; i++) {
        if (cate === categories[i].name) {
            color = categories[i].color;
        }
    }
    return color;
}

function TodoList(props) {
    let list = [];
    for (let i = 0; i < props.todos.length; i++) {
        list.push(<TodoItem todo={props.todos[i]} color={getColor(props.categories, props.todos[i].category)} key={i}></TodoItem>)
    }
    return list;
}

export default TodoList;