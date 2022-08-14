import React from 'react'
import { useDispatch } from 'react-redux'
import { addReaction } from './postsSlice'

const reactionIcons = {
  heart: '❤️',
  like: '👍',
}

const Reactions = ({ postId, postReactions: reactions }) => {
  const dispatch = useDispatch();

  const handleClick = (name) => {
    console.log(reactions, postId);
    dispatch(addReaction(postId, name))
  }
  return (
    <div className="post__reactions">
      {Object.entries(reactionIcons).map(([name, icon]) => {
        return <button className="post__reaction" key={name} onClick={() => handleClick(name)}>{icon} {reactions?.[name] || 0}</button>
      })}
    </div>
  )
}

export default Reactions