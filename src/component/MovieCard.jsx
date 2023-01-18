import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className='movieCard'>
      <img src={`http://image.tmdb.org/t/p/w200${posterURL}`} alt={title} />
      <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
      <p className='rating'>Rating: {rating}</p>
    </div>
  );
}
export default MovieCard;
