import { combineReducers } from 'redux'
import blogReducer from './blogs/blogReducer'

const rootReducer = combineReducers({
    posts : blogReducer
})

export default rootReducer