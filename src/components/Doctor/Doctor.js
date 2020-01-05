import React from 'react';
import './Doctor.css';

function Doctor(props) {
    console.log(props)
    return (
        <div>
            {props.Doctors.map((doctor, index) => {
                if (props.doctorid === doctor._id) {
                    return (
                        <div key={index + 0} >
                            <h4>{doctor.profile[0].first_name} {doctor.profile[0].last_name}, {doctor.profile[0].title}</h4>
                            <p>{doctor.profile[0].gender}</p>
                            <p>{doctor.profile[0].bio}</p>
                            {doctor.educations ? <div>{doctor.educations.map((education, index) => {
                                return (
                                    <div key={index + 0}>
                                        <div>
                                            <h2>{education.school}</h2>
                                            <h2>{education.degree}</h2>
                                        </div>
                                    </div>
                                )
                            })}</div> : null}
                            {doctor.licenses ? <div>{doctor.licenses.map((license, index) => {
                                return (
                                    <div key={index + 0}>
                                        <div>
                                            <h2>{license.state}</h2>
                                            <h2>{license.number}</h2>
                                        </div>
                                    </div>
                                )
                            })}</div> : null}
                            {doctor.specialties ? <div>{doctor.specialties.map((speciality, index) => {
                                return (
                                    <div key={index + 0}>
                                        <div>
                                            <h2>{speciality.name}</h2>
                                            <h2>{speciality.description}</h2>
                                            <h2>{speciality.actor}</h2>
                                        </div>
                                    </div>
                                )
                            })}</div> : null}
                        </div>
                    )
                }
            })}
        </div> 


    )
}

export default Doctor;