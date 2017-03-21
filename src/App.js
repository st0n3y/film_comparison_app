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
    };
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
                      loading: false
                    })
                  })
          })
          .catch(error => {
            console.log("Error fetching or parsing data", error);
          });
  }

  render() {
    console.log("App component state: ", this.state);
    return ( 
      <div>
        <div>
          <h1>Film Info</h1>
        </div>
        <div>
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : <FilmList film1={this.state.films[0]} film2={this.state.films[1]} />
          }
        </div>
        <SearchForm onSearch={this.performSearch} />
      </div>
    );

  }

}