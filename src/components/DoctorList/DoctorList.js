import React, { Component } from 'react';
import { Link } from '@reach/router';
import "./DoctorList.css";

function DoctorList(props) {
    console.log(props.Doctors)
    return (
        <div>
            <h1>DoctorList</h1>

            {props.Doctors.map((doctor, index) => {
                console.log(doctor)
                return (
                    <div key={index + 0}>
                        <p>{doctor.profile[0].first_name} {doctor.profile[0].last_name}</p>
                        <p><Link to={`/Doctor/${doctor._id}`}>View More</Link></p>
                    </div>
                )
            })}
        </div>
    )

}

export default DoctorList;