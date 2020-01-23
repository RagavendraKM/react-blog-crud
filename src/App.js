import React from 'react';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store'
import CreateBlog from './components/blogs/blogs.create';
import AllBlogs from './components/blogs/blogs.showAll'

function App() {
  return (
    <Provider store={store}>
    <div className="container">
      <h2>React CRUD Operations</h2>
      <CreateBlog />
      <AllBlogs />
    </div>
    </Provider>
  );
}

export default App;
