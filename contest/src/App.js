import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/searchbar';
import Post from './components/post';

function App() {
  const [posts, setPosts] = useState([]);
  const [totalLiked, setTotalLiked] = useState(0);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
      setPosts(response.data);
    };
    fetch();
  }, [page]);

  const handleLike = (postId) => {
    setTotalLiked(totalLiked + 1);
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: (post.likes || 0) + 1
        };
      }
      return post;
    }));
  };

  const handleLoadMorePosts = () => {
    setPage(page + 1);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Atiqs Social Media Feed App</h1>
      <p>Total likes this session: {totalLiked}</p>
      <Search handleSearch={handleSearch} />
      <div className='post-container'>
        {filteredPosts.map(post => (
          <Post key={post.id} post={post} handleLike={handleLike} />
        ))}
      </div>
      <div className="load-more-container">
        <button className="load" onClick={handleLoadMorePosts}>Load More Posts</button>
      </div>
    </div>
  );
        }

export default App;
