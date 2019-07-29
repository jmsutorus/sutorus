import React, { Component } from 'react';
import './BlogPost.css';
import './BlogHome.css';
import BlogNav from './BlogNav.js'

class BlogPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="blog-home">
                <BlogNav></BlogNav>
            </div>
        );
    }
}

export default BlogPost;