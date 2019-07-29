import React, { Component } from 'react';
import './BlogNav.css';

class BlogNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="blog-nav">
                <div className="nav-search-form">
                    <form>
                        <input className="nav-search-form-input" placeholder="search"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default BlogNav;