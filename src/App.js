import React from 'react';
import PostsList from './features/posts/PostsList';
import NewPostForm from './features/posts/NewPostForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NewPostForm/>
        <PostsList/>
      </div>
    </div>
  );
}

export default App;
