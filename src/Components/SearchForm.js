import React, { Component } from 'react';

export default class SearchForm extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query1.value, this.query2.value);
    e.currentTarget.reset();
  }
  
  render() {
    return (
      <div className="search-box">
        <form onSubmit={this.handleSubmit}>
          <h4>Search for films to compare:</h4><br />
          <input type="text" 
            name="search1"
            ref={(input) => this.query1 = input} /><br />
          <input type="text" 
            name="search2"
            ref={(input) => this.query2 = input} /><br />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}