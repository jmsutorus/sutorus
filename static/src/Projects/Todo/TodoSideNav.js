import React, { Component } from 'react';

function CategoryList(props) {
    let list = [];
    for (let i = 0; i < props.categories.length; i++) {
        list.push(<div className="todo-cat-item" key={i}>
            <div className="todo-cat-item-image"></div>
            <div className="todo-cat-item-text">{props.categories[i].name}</div>
        </div>)
    }
    return list;
}

function TodoSideNav(props) {
    return (
        <div className="todo-side-nav">
            <div className="todo-cat-item">
                <div className="todo-cat-item-image"></div>
                <div className="todo-cat-item-text">Joseph Sutous</div>
            </div>
            <CategoryList categories={props.categories}></CategoryList>
            <div className="todo-cat-item">
                <div className="todo-cat-item-image"></div>
                <div className="todo-cat-item-text todo-new-cat">New Category</div>
            </div>
        </div>
    );
}

export default TodoSideNav;