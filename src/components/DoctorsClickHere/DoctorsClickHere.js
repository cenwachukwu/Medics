import React from 'react';
import { Link } from '@reach/router';
import "./DoctorsClickHere.css";

function DoctorsClickHere() {
    return (
        <div className="DoctorsClickHere">
            <div className="DoctorsClickHere-container">
                <div className="DoctorsClickHere-box">
                    <p><Link to="/CreateProfile" className="DCHLink">Create profile</Link></p>
                </div>
                <div className="DoctorsClickHere-box">
                    <p><Link to="/EditProfile" className="DCHLink">Edit profile</Link></p>
                </div>
                <div className="DoctorsClickHere-box">
                    <p><Link to="/DeleteProfile" className="DCHLink">Delete profile</Link></p>
                </div>
            </div>
        </div>

    )

}

export default DoctorsClickHere;