import React, { useState } from 'react';

function Post({ post, handleLike }) {
  const [likes, setLikes] = useState(0);

  const limitedTitle = post.title.slice(0, 30);

  const handleLikeClick = () => {
    setLikes(likes + 1);
    handleLike(post.id);
  };

  return (
    <div className='post'>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>User Id: {post.userId}</p>
      <p>Title: {limitedTitle}</p>
      <p>Likes: {likes}</p>
      <button className="like" onClick={handleLikeClick}>Like Post</button>
    </div>
  );
}

export default Post;
