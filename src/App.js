import React from 'react';
import PostsList from './features/posts/PostsList';
import NewPostForm from './features/posts/NewPostForm';

function App() {
  return (
    <div className="App">
      <NewPostForm/>
      <PostsList/>
    </div>
  );
}

export default App;
