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
                </div>
            </div>
        )
    }
}

export default Hamburger;