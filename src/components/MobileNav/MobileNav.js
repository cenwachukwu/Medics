import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../../App.css';
import "./MobileNav.css";
import Hamburger from './Hamburger';

class MobileNav extends Component {
    render() {
        return (
            <div className="MobileNav">
                <div className="MobileNav__container">
                    <div className="MobileNav__logo">
                        <Link to="/" className="MobileNav__logoLink">
                            <h4 className="homeLogo">Medicx</h4>
                        </Link>
                    </div>
                    <div>
                        <div>
                            <Hamburger/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileNav;