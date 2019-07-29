import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './BlogCard.css';

class BlogHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={`/blog/post:${this.props.post.id}`} />;
        }
        const hashtags = [];
        if (this.props.post.hashtags !== null) {
            for (let i = 0; i < this.props.post.hashtags.length; i++) {
                hashtags.push(<a href="/" className="hashtag-a"><span className="hashtag" key={i}>{this.props.post.hashtags[i]}</span></a>);
            }
        }
        let postPic;
        if (this.props.post.pic && this.props.post.postPic) {
            postPic = <div className="card-picture-wrapper"><img className="card-pic" alt="" src={process.env.PUBLIC_URL + this.props.post.postPic}></img></div>;
        } else {
            postPic = <div>  </div>
        }
        let userPic;
        if (this.props.post.userPic !== null) {
            userPic = <img className="blog-user-image" alt="" src={process.env.PUBLIC_URL + this.props.post.userPic}></img>;
        } else {
            userPic = <div></div>;
        }
        return (
            <div className="blog-card" onClick={this.handleOnClick}>
                {postPic}
                <div className="card-body">
                    <div className="card-title">{this.props.post.title}</div>
                    <div className="card-description">{this.props.post.description}</div>
                    <div className="user-pic">{userPic}</div>
                    <div className="user-name"><a href="/" className="user-name-a">{this.props.post.userName}・<span>{this.props.post.date}</span></a></div>
                    <div className="user-hashtags">
                        {hashtags}
                    </div>
                    <div className="card-likes">
                        <i className="fas fa-heart customHeart"></i>
                        <span className="card-likes-number">{this.props.post.likes}</span>
                    </div>
                    <div className="card-read-time">{this.props.post.readTime} read</div>
                </div>
            </div>
        );
    }
}

export default BlogHome;