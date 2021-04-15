import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import Movies from './components/Movies/movies';
import './App.css';
import NavBar from './components/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';

class AppMovie extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container App">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default AppMovie;
