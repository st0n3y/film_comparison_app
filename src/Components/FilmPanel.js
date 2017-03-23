import React, { Component } from 'react';

export default class FilmPanel extends Component {

  handleGuess = (event) => {
    let parentPanel = event.target.parentNode.parentNode;
    this.props.onGuess(parentPanel);
  }

  render() {
    let showOrHide;
    (this.props.hidden) ? showOrHide = "hidden" : showOrHide = "revealed";
    
    return (
      <div className="film-panel" id={this.props.id}>
        <h2>{this.props.title}</h2>
        {
          (this.props.poster == "N/A")
          ? <img src="http://placehold.it/300x444?text=No+Poster+Available" />
          : <img src={this.props.poster} />
        }
        <h3>Metascore: </h3><h3 className={showOrHide}>{this.props.rating}</h3>
        <div className="guess-box" onClick={this.handleGuess}>
          <p>I think this has the higher score</p>
        </div>
      </div>
    );
  }
    

};