import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FilmList from './Components/FilmList';
import SearchForm from './Components/SearchForm';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      film1: [],
      film2: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query1 = "la la land", query2 = "moonlight") => {
    axiosQuery(query1);
    axiosQuery(query2);
  }

  axiosQuery = (query) => {
    axios.get(`http://www.omdbapi.com/?t=${query}`)
      .then(response => {
        this.setState({
          films: response,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error fetching or parsing data", error);
      });
  }  

  render() {
    console.log("this.state", this.state);
    console.log("this.state.films", this.state.films);
    return ( 
      <div>
        <div>
          <h1>Film Info</h1>
        </div>
        <div>
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : <FilmList data={this.state.films} />
          }
        </div>
        <SearchForm onSearch={this.performSearch} />
      </div>
    );
  }
}