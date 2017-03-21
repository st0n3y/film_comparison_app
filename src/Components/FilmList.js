import React from 'react';
import FilmPanel from './FilmPanel';
import NoFilms from './NoFilms';

const FilmList = props => {
  console.log("FilmList Props: ", props);
  const results = [];
  results.push(props.film1.data);
  results.push(props.film2.data);
  let films;
  if(results.Error) {
    films = <NoFilms />
  } else {
    films = results.map(film => <FilmPanel title={film.Title} poster={film.Poster} rating={film.Metascore} key={film.imdbID} />);
  }

  return(
    <ul>
      {films}
    </ul>
  );

}

export default FilmList;