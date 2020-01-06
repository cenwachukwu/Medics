import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../../App.css';
import "./Hamburger.css";

class Hamburger extends Component {
    render() {
        return (
            <div>
                <div className="Hamburger__wrapper">
                    <input type="checkbox" class="toggler" />
                    <div class="hamburger">
                        <div class="hamburger-lines"></div>
                    </div>
                    <div class="fixednavbar">
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