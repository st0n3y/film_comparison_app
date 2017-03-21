import React from 'react';

const FilmPanel = props => {

  return (
    <li>
      <h2>{props.title}</h2>
      {
        (props.poster == "N/A")
        ? <img src="http://placehold.it/300x444?text=No+Poster+Available" />
        : <img src={props.poster} />
      }
      <h3>{props.rating}</h3>
    </li>
  );

};

export default FilmPanel;