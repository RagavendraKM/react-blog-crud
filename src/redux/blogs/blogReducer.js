import { POST_BLOG } from './blogItem'

const initialState = []

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_BLOG:
            return state.concat([action.data]);
        case 'DELETE_POST':
            return state.filter((post) => post.id !== action.id)
        case 'EDIT_POST':
            return state.map((post) => post.id === action.id ? { ...post, editing: !post.editing } : post)
        case 'UPDATE' : 
            return state.map((post) => post.id === action.id ? { 
                ...post, 
                editing: !post.editing,
                title : action.data.newTitle,
                message : action.data.newMessage
            } : post
            )
        default:
            return state
    }
}

export default blogReducer