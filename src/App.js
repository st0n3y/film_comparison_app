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
      loading: true,
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query1 = "la la land", query2 = "moonlight") => {
    const filmArray =[];
    this.axiosQuery1(query1);
    this.axiosQuery2(query2);
    
  }

  axiosQuery1 = (query) => {
    axios.get(`http://www.omdbapi.com/?t=${query}`)
      .then(response => {
        this.setState({
          film1: response,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error fetching or parsing data", error);
      });
  }

  axiosQuery2 = (query) => {
    axios.get(`http://www.omdbapi.com/?t=${query}`)
      .then(response => {
        this.setState({
          film2: response,
          loading: false
        })
      })
      .catch(error => {
        console.log("Error fetching or parsing data", error);
      });
  }  

  render() {
    
    return ( 
      <div>
        <div>
          <h1>Film Info</h1>
        </div>
        <div>
          {
            (this.state.loading)
            ? <h3>Loading...</h3>
            : <FilmList film1={this.state.film1} film2={this.state.film2} />
          }
        </div>
        <SearchForm onSearch={this.performSearch} />
      </div>
    );

  }
  
}