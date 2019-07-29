import React, { Component } from 'react';
import { Redirect } from 'react-router';
import BlogCard from './BlogCard.js';
import './BlogHome.css';
import BlogNav from './BlogNav.js'

const posts = [
    {
        id:  0,
        title: 'Portals Are Lit!',
        pic: true,
        postPic: '/sadboy.gif',
        description: 'Description about the blog post goes here, cos portals are litty!',
        userName: 'Joseph Sutorus',
        userPic: '/david.png',
        date: 'Jul 28',
        hashtags: ['react', 'javascript', 'webdev', 'ux'],
        likes: 0,
        readTime: '4 min'
    },
    {
        id:  1,
        title: 'Portals Are Lit!',
        pic: false,
        postPic: '',
        description: 'Description about the blog post goes here, cos portals are litty!',
        userName: 'Joseph Sutorus',
        userPic: '/david.png',
        date: 'Jul 28',
        hashtags: ['react', 'javascript', 'webdev', 'ux'],
        likes: 0,
        readTime: '4 min'
    },
    {
        id:  2,
        title: 'Portals Are Lit!',
        pic: false,
        postPic: '',   
        description: 'Description about the blog post goes here, cos portals are litty!',
        userName: 'Joseph Sutorus',
        userPic: '/david.png',
        date: 'Jul 28',
        hashtags: ['react', 'javascript', 'webdev', 'ux'],
        likes: 0,
        readTime: '4 min'
    }
];

function generatePosts() {
    const retPosts = [];
    for (let i = 0; i < posts.length; i++) {
        posts.push(<BlogCard onClick={this.routePost} post={posts[i]} key={i}></BlogCard>);
    }
    return retPosts;
}

class BlogHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        const retPosts = [];
        for (let i = 0; i < posts.length; i++) {
            retPosts.push(<BlogCard post={posts[i]} key={i}></BlogCard>);
        }
        return (
            <div className="blog-home">
                <BlogNav></BlogNav>
                <div className="blog-page-wrapper">
                    <div className="blog-container">
                        <div className="card-wrapper">
                            {retPosts}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogHome;