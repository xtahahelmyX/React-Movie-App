import React from 'react';

const Filter = ({titleFilter, ratingFilter, setTitleFilter, setRatingFilter }) => {
  return (
    <div className='search'>
        <input className='titleSearch' type="text" value={titleFilter} onChange={e => setTitleFilter(e.target.value) }/>
        <input className='ratingSearch' type="number" value={ratingFilter} onChange={e => setRatingFilter(e.target.value)} />
    </div>
  );
}

export default Filter;
