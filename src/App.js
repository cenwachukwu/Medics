import React, { Component } from 'react';
import { Router} from "@reach/router";
import Axios from 'axios'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import CreateProfile from './components/CreateProfile/CreateProfile';
import DoctorList from './components/DoctorList/DoctorList';
import Doctor from './components/Doctor/Doctor';
import MobileNav from './components/MobileNav/MobileNav';
import DoctorsClickHere from './components/DoctorsClickHere/DoctorsClickHere';
import EditProfile from './components/EditProfile/EditProfile';
import DeleteProfile from './components/DeleteProfile/DeleteProfile';
import Home from './components/Home/Home';
import SearchDoctors from './components/SearchDoctors/SearchDoctors';
import SearchByInsurance from './components/SearchbyInsurance/SearchByInsurance';
import SearchByLastName from './components/SearchByLastName/SearchByLastName';
import SearchBySpeciality from './components/SearchBySpeciality/SearchBySpeciality';

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
        <MobileNav/>
        <Router>
          <Home path="/"/>
          <DeleteProfile path="DeleteProfile"/>
          <CreateProfile path="CreateProfile"/>
          <EditProfile path="EditProfile"/>
          <DoctorsClickHere path="myaccount"/>
          <DoctorList path="DoctorList" Doctors={this.state.Doctors}/>
          <Doctor path="/Doctor/:doctorid" Doctors={this.state.Doctors}/>
          <SearchDoctors path="SearchDoctors">
            <SearchByInsurance path="searchbyinsurance"/>
            <SearchByLastName path="searchbyprofile"/>
            <SearchBySpeciality path="searchbyspeciality"/>
          </SearchDoctors>
        </Router>
      </div>
    );
  }
}

export default App;