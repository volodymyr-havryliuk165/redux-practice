import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from './postsSlice';
import PostAuthor from './PostAuthor';
import Reactions from './Reactions';
import { editPost, deletePost } from './postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const posts = useSelector(getPosts);

  return (
    <div className="posts">
      {posts.map((post) => {
        return (
          <div className="post" key={post.id}>
            <h2 className="post__title">
              <span>{post.title}</span>
              <PostAuthor id={post?.userId} />
            </h2>
            { !editing && <p className="post__content">{post.content}</p>}
            { editing && <input
              type="text"
              className="post__input"
              value={post.content}
              onChange={(e) => {
                dispatch(editPost({ id: post.id, content: e.target.value }));
              }}
            />}
            <div className="post__actions">
              <Reactions postId={post.id} postReactions={post.reactions} />
              <button className="post__edit" onClick={() => setEditing(e => !e)}>{editing? 'Save' : 'Edit'}</button>
              <button className="post__delete" onClick={() => {
                dispatch(deletePost({id: post.id}));
              }}>Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
