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
                    <img src={Image} height="45" width="45" />
                    <div>
                        <Link to="/SearchDoctors/searchbyprofile"><button>Search by Lastname</button></Link>
                        <Link to="/SearchDoctors/searchbyinsurance"><button>Search by Insurance</button></Link>
                        <Link to="/SearchDoctors/searchbyspeciality"><button>Search by Speciality</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;