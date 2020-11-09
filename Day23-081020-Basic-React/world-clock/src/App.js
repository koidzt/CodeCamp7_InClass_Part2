import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1 style={{ fontSize: "5em", backgroundColor: "#DDDDDD" }}>World Clock</h1>
        <Clock  location= "Bangkok" cn= "btn btn-primary"/>
        <Clock  location= "Japan" cn= "btn btn-success"/>
        <Clock  location= "London" cn= "btn btn-secondary"/>
      </div>
    );
  }
}

export default App;
