import React from 'react';
import './Doctor.css';

function Doctor(props) {
    console.log(props)
    return (
        <div className="Doctor__container">
            <div >
                {props.Doctors.map((doctor, index) => {
                    if (props.doctorid === doctor._id) {
                        return (
                            <div key={index + 0} className="Doctor__boxes">
                                <div className="Doctor__boxes--profile">
                                    <div className="Doctor__boxes--name">
                                        <h4>{doctor.profile[0].first_name} {doctor.profile[0].last_name}, {doctor.profile[0].title} <span className="Doctor__boxes--nameSpan">({doctor.profile[0].gender})</span></h4>
                                    </div>
                                    <div>
                                        <p className="Doctor__boxes--description"> {doctor.profile[0].bio}</p>
                                    </div>
                                </div>
                                {doctor.educations ? <div className="Doctor__license--container education">
                                    <div className="Doctor__license-headerbox">
                                        <h3>Education</h3>
                                    </div>
                                    <div className="Doctor__license">{doctor.educations.map((education, index) => {
                                        return (
                                            <div key={index + 0}>
                                                <div>
                                                    <h2>{education.school}</h2>
                                                    <h2>{education.degree}</h2>
                                                </div>
                                            </div>
                                        )
                                    })}</div>
                                </div> : null}
                                {doctor.licenses ? <div className="Doctor__license--container">
                                    <div className="Doctor__license-headerbox">
                                        <h3>Licenses</h3>
                                    </div>
                                    <div className="Doctor__license">{doctor.licenses.map((license, index) => {
                                        return (

                                            <div className="Doctor__license--text" key={index + 0}>
                                                <p><span className="Doctor__license--span">{license.state}:</span> {license.number}</p>
                                            </div>

                                        )
                                    })}</div>
                                </div> : null}
                                {doctor.specialties ? <div className="Doctor__license--container">
                                    <div className="Doctor__license-headerbox">
                                        <h3>Speciality</h3>
                                    </div>
                                    <div className="Doctor__license">{doctor.specialties.map((speciality, index) => {
                                        return (
                                            <div className="Doctor__license--text" key={index + 0}>
                                                <p><span className="Doctor__license--span">{speciality.name}: </span> {speciality.description}</p>
                                            </div>
                                        )
                                    })}</div>
                                </div> : null}
                                {doctor.practices ? <div className="Doctor__license--container">
                                    <div className="Doctor__license-headerbox">
                                        <h3>Practice(s)</h3>
                                    </div>
                                    <div className="Doctor__license">{doctor.practices.map((practice, index) => {
                                        return (
                                            <div className="Doctor__license--text Practice" key={index + 0}>
                                                <div>
                                                    <h2>{practice.name}</h2>
                                                </div>
                                                <div className="Doctor__Practice">
                                                    <p className="Doctor__Practise--pT"><span className="Doctor__Practise--span">Address: </span> {practice.visit_address[0].street}, {practice.visit_address[0].city}, {practice.visit_address[0].state} {practice.visit_address[0].zip}</p>
                                                    <p className="Doctor__Practise--pT"><span className="Doctor__Practise--span">{practice.phones[0].type}: </span> {practice.phones[0].number}</p>
                                                    <p className="Doctor__Practise--pT"><span className="Doctor__Practise--span">Language: </span> {practice.languages[0].name}</p>
                                                    {practice.website ? <p className="Doctor__Practise--pT"><span className="Doctor__Practise--span">Website: </span>{practice.website}</p> : null}
                                                </div>
                                            </div>
                                        )
                                    })}</div>
                                </div> : null}

                                <div className="Doctor__insurance--container">
                                    {doctor.insurances ? <div className="Doctor__insurance">{doctor.insurances.map((insurance, index) => {
                                        return (
                                            <div key={index + 0} className="DoctorList__box">
                                                <p className="Doctor__insurance--ptag">Category: {insurance.insurance_plan[0].category}</p>
                                                <p className="Doctor__insurance--ptag">Insurance Company: {insurance.insurance_plan[0].name}</p>
                                                <p className="Doctor__insurance--ptag">UID: {insurance.insurance_plan[0].uid}</p>
                                            </div>
                                        )
                                    })}</div> : null}
                                </div>



                            </div>
                        )
                    }
                })}
            </div>
        </div>


    )
}

export default Doctor;