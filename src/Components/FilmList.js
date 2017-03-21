import React from 'react';
import FilmPanel from './FilmPanel';
import NoFilms from './NoFilms';

const FilmList = props => {
  console.log("FilmList Props: ", props);
  const results = props.data.data;
  let film;
  if(results.Error) {
    films = <NoFilms />
  } else {
    films = results.map(film => <FilmPanel title={film.Title} poster={film.Poster} rating={film.imdbRating} />);
  }

  return(
    <ul>
      {films}
    </ul>
  );

}

export default FilmList;