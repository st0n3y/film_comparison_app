import React, { Component } from 'react';

export default class FilmPanel extends Component {

  render() {
    let showOrHide;
    (this.props.hidden) ? showOrHide = "hidden" : showOrHide = "revealed";

    return (
      <div className="film-panel">
        <h2>{this.props.title}</h2>
        {
          (this.props.poster == "N/A")
          ? <img src="http://placehold.it/300x444?text=No+Poster+Available" />
          : <img src={this.props.poster} />
        }
        <h3 className={showOrHide}>{this.props.rating}</h3>
      </div>
    );
  }
    

};