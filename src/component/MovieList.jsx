import React, {useState, useEffect} from 'react'
import axios from 'axios'
// Importing components 
import Filter from './Filter'
import MovieCard from './MovieCard'
import {key} from '../../envy'
import { data } from 'autoprefixer'

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
 
  useEffect(() => {
   axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query='Harry'&&language=en-US&page=1&include_adult=false`)
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));    
  }, []);

  let filteredMovies = [];
  if(movies.results) {
    filteredMovies = movies.results.filter(movie => {
      return movie.original_title.includes(titleFilter) && movie.vote_average >= ratingFilter;
    });}
    const currentMovies = filteredMovies.slice(0, 8);
  return (
    <div>
      <Filter titleFilter={titleFilter} ratingFilter={ratingFilter} setTitleFilter={setTitleFilter} setRatingFilter={setRatingFilter} />
      {currentMovies.map((movie) => (
        <MovieCard key={movie.original_title} title={movie.original_title} description={movie.overview} posterURL={movie.backdrop_path} rating={movie.vote_average} />
      ))}
    </div>
  )
}

export default MovieList
