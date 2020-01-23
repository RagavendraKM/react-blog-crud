import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer);   //createStore accpet only one reducer

export default store