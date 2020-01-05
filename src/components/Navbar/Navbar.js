import React, { Component } from 'react';
import { Link } from '@reach/router';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
               <div>
                <Link to="/">
                    <h4>Medicx</h4>
                </Link>
                </div>
                <div className="NavLinks">
                    <ul className="NavBar">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/DoctorList">Find your doctor</Link>
                        </li>
                        <li>
                            <Link to="/CreateProfile">Doctors click here</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar;