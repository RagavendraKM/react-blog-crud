import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostBlog from './blogs.post'
import EditPost from './blogs.edit'

class AllBlogs extends Component {
    render() {
        return (
            <div>
                <h1>All Posts</h1>
                {this.props.posts.posts.map((post) => (
                <div key={post.id}> {
                    post.editing ? <EditPost post={post} key={post.id} /> : 
                    <PostBlog key={post.id} post={post} />
                    }
                </div>))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(AllBlogs);