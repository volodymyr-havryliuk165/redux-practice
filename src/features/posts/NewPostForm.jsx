import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postsSlice';
import { getUsers } from '../users/usersSlice';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(0);

  const users = useSelector(getUsers);
  const dispatch = useDispatch();

  const checkRequired = title && content && userId;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(title, content, userId));

    setTitle('');
    setContent('');
  };

  return (
    <div className="create-post-form">
      <h2>Add new post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">User:</label>
        <select
          name="user"
          id="user"
          value={userId}
          onChange={(e) => setUserId(+e.target.value)}
        >
          <option value=""></option>
          {users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={!checkRequired}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
