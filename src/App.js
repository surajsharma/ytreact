import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderNav from './containers/HeaderNav/HeaderNav'
import SideBar from './containers/SideBar/SideBar'
class App extends Component {
  render() {
    return (
        <div>
            <HeaderNav/>
            <SideBar/>
        </div>
    );
  }
}

export default App;