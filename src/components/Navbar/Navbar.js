import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../../App.css';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="navContainer">
                <div>
                    {window.innerWidth < 769 ?
                        <div></div> :
                        <div className="navBarContainer">
                            <div>
                                <Link to="/" className="atag">
                                    <h4 className="homeLogo">Medicx</h4>
                                </Link>
                            </div>
                            <div className="NavLinks">
                                <ul className="NavBarLinks">
                                    <li >
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
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;