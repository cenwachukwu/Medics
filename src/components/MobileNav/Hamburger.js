import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../../App.css';
import "./Hamburger.css";

class Hamburger extends Component {
    render() {
        return (
            <div>
                <div className="Hamburger__wrapper">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger">
                        <div className="hamburger-lines"></div>
                    </div>
                    <div className="fixednavbar">
                        <div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/" className="atag">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/DoctorList" className="atag">Find your doctor</Link>
                                    </li>
                                    <li>
                                    <Link to="/CreateProfile" className="atag">Doctors click here</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hamburger;