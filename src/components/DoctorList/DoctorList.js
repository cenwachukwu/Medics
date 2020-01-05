import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./DoctorList.css";

class DoctorList extends Component {
    render() {
        return (
            <div>
                <h1>DoctorList</h1>
                <p><Link to="/DoctorList">View More</Link></p>
            </div>
        )
    }
}

export default DoctorList;