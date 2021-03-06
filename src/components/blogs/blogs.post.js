import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostBlog extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.post.title}</h3>
                <p>{this.props.post.message}</p>
                <button
                    onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}
                    >Edit</button>
                <button
                    onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>
                    Delete</button>
            </div>
        );
    }
}

export default connect()(PostBlog)