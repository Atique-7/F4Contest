import React from 'react';

function Search({ handleSearch }) {
  return (
    <div className='search'>
      <input type="text" placeholder="Search by title" onChange={handleSearch} />
    </div>
  );
}

export default Search;