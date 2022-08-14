import React from 'react'
import { useSelector } from 'react-redux'
import { getUsers } from '../users/usersSlice'

const PostAuthor = ({ id }) => {

  const users = useSelector(getUsers);
  const user = users.find(user => user.id === id);

  return (
    <span className="post__author">Author: {user?.name || 'Unknown'}</span>
  )
}

export default PostAuthor