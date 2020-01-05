import React from 'react';
import { Link } from '@reach/router';
import "./DoctorList.css";

function DoctorList(props) {
    console.log(props.Doctors)
    return (
        <div className="DoctorList__list">
            {props.Doctors.map((doctor, index) => {
                console.log(doctor)
                return (
                    <div key={index + 0} className="DoctorList__box">
                        <h4>{doctor.profile[0].first_name} {doctor.profile[0].last_name}</h4>
                        {doctor.specialties[0] ? <p className="DoctorList__box--specialties">{doctor.specialties[0].actor}</p> : null}
                        <p><Link to={`/Doctor/${doctor._id}`}>View More</Link></p>
                    </div>
                )
            })}
        </div>
    )

}

export default DoctorList;