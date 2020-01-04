import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreateProfile from './components/CreateProfile/CreateProfile';
import DoctorList from './components/DoctorList/DoctorList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Doctors: []
    }  
  }

  render(){
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Route path="/CreateProfile" exact component ={CreateProfile}/>
          <Route path="/DoctorList" exact component ={DoctorList}/>
        </Router>
      </div>
    );
  }
}

export default App;