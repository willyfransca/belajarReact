import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../componen/Post';


class BlogPost extends Component {
    state = {
        post: []
    }
    componentDidMount() {
        fetch('localhost:8080/resep/')
            .then(response => response.json())
            .then(json => console.log(json))
    }



    render() {
        return (
            <Fragment>
                <p className="section-title"> Blog Post</p>
                <Post title="title" desc="desc" />
            </Fragment>
        )
    }
}
export default BlogPost;