import React, { Component } from 'react';
import DetailPane from '../../components/DetailPane/DetailPane';
import NavBar from '../../components/NavBar/NavBar';

import logo from './logo.svg';
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <DetailPane />
      </div>
    );
  }
}

export default App;
