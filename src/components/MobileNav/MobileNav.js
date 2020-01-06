import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../../App.css';
import "./MobileNav.css";

class MobileNav extends Component {
    render() {
        return (
            <div className="MobileNav">
                <div>
                    <div>
                        <Link to="/">
                            <h4 className="homeLogo">Medicx</h4>
                        </Link>
                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileNav;