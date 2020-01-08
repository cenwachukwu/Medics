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
                        <Link to="/SearchDoctors/searchbyprofile"><button>Search by Lastname</button></Link>
                    </div>
                    <div>
                        <Link to="/SearchDoctors/searchbyinsurance"><button>Search by Insurance</button></Link>
                    </div>
                    <div>
                        <Link to="/SearchDoctors/searchbyspeciality"><button>Search by Speciality</button></Link>
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default SearchDoctors;