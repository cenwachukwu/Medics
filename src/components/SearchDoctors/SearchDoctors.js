import React, { Component } from 'react';
import { Link } from '@reach/router';
import '../../App.css';
import "./SearchDoctors.css";

class SearchDoctors extends Component {
    render() {
        return (
            <div className="SearchDoctors">
                <div className="SearchDoctors__Container">
                    <div>
                        <Link to="/SearchDoctors/searchbyprofile"><button className="SearchDoctors__Buttons">Search by Lastname</button></Link>
                    </div>
                    <div>
                        <Link to="/SearchDoctors/searchbyinsurance"><button className="SearchDoctors__Buttons">Search by Insurance</button></Link>
                    </div>
                    <div>
                        <Link to="/SearchDoctors/searchbyspeciality"><button className="SearchDoctors__Buttons">Search by Speciality</button></Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default SearchDoctors;