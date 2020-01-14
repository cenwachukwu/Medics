import React, { Component } from 'react';
import { Link } from '@reach/router';
import Axios from 'axios';
import '../../App.css';
import '../Doctor/Doctor.css'

class SearchBySpeciality extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "", //to show the users query
            result: [], //to show the results
        };
    }

    fetchResultsFromApi = (evt) => {
        evt.preventDefault();
        const Url = `https://med-directory-cen.herokuapp.com/directory/specialties/${this.state.query}`;
        Axios.get(Url)
            .then(res => {
                console.log(res.data[0])
                this.setState({
                    result: res.data //now we set state of results to res.data[0]
                })
                console.log(this.state.result)
                {this.state.result.length ? console.log("speciality exists"): alert("Speciality does not exists")}
            })
            .catch(err => {
                console.log(err)
                alert("There was an error. Please check your entry")
            })
        this.setState({ query: "" });
    }

    onProfileNameChange = (evt) => {
        const query = evt.target.value;
        const queryCapitalized = query.charAt(0).toUpperCase() + query.slice(1)
        console.log(queryCapitalized)
        this.setState({ query: queryCapitalized });
    }

    render() {
        const { query } = this.state;
        console.log(this.state)
        return (
            <div className="SearchByLastName">
                <div className="SSearchByLastName__Container">
                    <input type="text" value={query} placeholder="Enter speciality eg. Surgery" onChange={this.onProfileNameChange} />
                    <button className="SearchButton" onClick={this.fetchResultsFromApi}>Find</button>
                </div>
                <div className="DoctorList__list">
                    {this.state.result.length ? this.state.result.map((doctor, index) => {
                        console.log(doctor)
                        return (
                            <div key={index + 0} className="DoctorList__box">
                                <h4>{doctor.profile[0].first_name} {doctor.profile[0].last_name}, {doctor.profile[0].title}</h4>
                                {doctor.specialties[0] ? <p className="DoctorList__box--specialties">{doctor.specialties[0].actor}</p> : null}
                                <p><Link to={`/Doctor/${doctor._id}`}>View More</Link></p>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        )
    }
}

export default SearchBySpeciality;