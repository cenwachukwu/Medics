import React, { Component } from 'react';
import {render } from "react-router-dom";
import { Router, Link } from "@reach/router";
import Axios from 'axios'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreateProfile from './components/CreateProfile/CreateProfile';
import DoctorList from './components/DoctorList/DoctorList';
import Doctor from './components/Doctor/Doctor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Doctors: []
    }
  }
  componentDidMount() {
    Axios.get('https://med-directory-cen.herokuapp.com/directory')
      .then(res => {
        this.setState({ Doctors: res.data })
        // console.log(this.state.Doctors)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <CreateProfile path="/CreateProfile"/>
          <DoctorList path="/DoctorList" Doctors={this.state.Doctors}/>
          <Doctor path="/Doctor/:doctorid" Doctors={this.state.Doctors}/>
        </Router>
      </div>
    );
  }
}

export default App;