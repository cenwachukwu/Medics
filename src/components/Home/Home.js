import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../../App.css';
import "./Home.css";
import Image from "../2117344.svg"

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home__Container">
                    <div className='Home__Image--Container'>
                    <img src={Image} className='Home__Image'/>
                    </div>
                    
                    <div className="Home__Buttons--Container">
                        <Link to="/SearchDoctors/searchbyprofile"><button className="Home__Buttons">Search by Lastname</button></Link>
                        <Link to="/SearchDoctors/searchbyinsurance"><button className="Home__Buttons">Search by Insurance</button></Link>
                        <Link to="/SearchDoctors/searchbyspeciality"><button className="Home__Buttons">Search by Speciality</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;