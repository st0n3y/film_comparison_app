import React from 'react';
import FilmPanel from './FilmPanel';
import NoFilms from './NoFilms';

const FilmList = props => {

  const results = [];
  results.push(props.film1.data);
  results.push(props.film2.data);

  let films;
  if(results[0].Error || results[1].Error) {
    films = <NoFilms />
  } else {
    films = results.map(film => <FilmPanel title={film.Title} poster={film.Poster} rating={film.Metascore} key={film.imdbID} id={film.imdbID} hidden={props.hidden} onGuess={props.onGuess} />);
  }

  return(
    <div className="film-list">
      {films}
    </div>
  );

}

export default FilmList;