import React from 'react';
import { Link } from '@reach/router';
import "./DoctorsClickHere.css";

function DoctorsClickHere() {
    return (
        <div className="DoctorsClickHere">
            <div>
                <div className="DoctorList__list">
                    <p><Link to="/CreateProfile">Create profile</Link></p>
                </div>
                <div className="DoctorList__list">
                    <p><Link to="/EditProfile">Edit profile</Link></p>
                </div>
                <div className="DoctorList__list">
                    <p><Link to="/DeleteProfile">Delete profile</Link></p>
                </div>
            </div>
        </div>

    )

}

export default DoctorsClickHere;