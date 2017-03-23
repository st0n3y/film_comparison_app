import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FilmList from './Components/FilmList';
import SearchForm from './Components/SearchForm';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      films: [],
      loading: true,
      hidden: true,
      winner: ""
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query1 = "la la land", query2 = "moonlight") => {
    const filmArray = [];

    axios.get(`http://www.omdbapi.com/?t=${query1}`)
          .then(response => {
            filmArray.push(response);
          })
          .then(() => {
            axios.get(`http://www.omdbapi.com/?t=${query2}`)
                  .then(response => {
                    filmArray.push(response);
                  })
                  .then(() => {
                    this.setState({
                      films: filmArray,
                      loading: false,
                      hidden: true
                    })
                  })
                  .then(() => {
                    this.findWinner();
                  })
          })
          .catch(error => {
            console.log("Error fetching or parsing data", error);
          });
  }

  findWinner = () => {
    let winner;
    let film1 = this.state.films[0].data;
    let film2 = this.state.films[1].data;
    
    if(film1.Metascore > film2.Metascore) {
      winner = film1.imdbID;
    } else {
      winner = film2.imdbID;
    }
    this.setState({
      winner: winner
    })
  }

  revealScores = (panel) => {
    this.setState({
      hidden: false
    })
    if(panel.id == this.state.winner) {
      console.log("You chose correctly!")
    } else {
      console.log("You lose.")
    }
  }

  render() {
    
    let film1 = this.state.films[0];
    let film2 = this.state.films[1];

    return ( 
      <div>
        <div>
          <h1>Compare Film Scores</h1>
        </div>
        <div>
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : <FilmList film1={film1} film2={film2} hidden={this.state.hidden} onGuess={this.revealScores} />
          }
        </div>
        <SearchForm onSearch={this.performSearch} />
      </div>
    );

  }

}