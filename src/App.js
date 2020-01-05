import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router } from "@reach/router";
import Axios from 'axios'
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
  componentDidMount() {
    Axios.get('https://med-directory-cen.herokuapp.com/directory')
      .then(res => {
        this.setState({ Doctors: res.data })
        console.log(this.state.Doctors)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route path="/CreateProfile" exact component={CreateProfile} />
          <Route path="/DoctorList" exact component={DoctorList} />
        </Router>
      </div>
    );
  }
}

export default App;