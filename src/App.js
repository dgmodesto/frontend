import React from 'react';
//modo full import React, { Component } from 'react';
import './App.css';

import Routes from './routes';
//formato full
//class App extends Component {
//  render() {
//    return <Main/>
//  }
//}

//formato optimizado
const App = () => <Routes />;

export default App;
