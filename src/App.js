import React, { Component } from 'react';
import Movies from './components/Movies/movies';
import './App.css';

class AppMovie extends Component {
  render() {
    return (
      <main className="container App">
        <Movies />
      </main>
    );
  }
}

export default AppMovie;
