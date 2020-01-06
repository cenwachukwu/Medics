import React, { Component } from 'react';
import Axios from 'axios'
import { Link } from '@reach/router';
import "./DeleteProfile.css";

class DeleteProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: "",
            id: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
    }

    onChangeId(evt) {
        evt.preventDefault();
        this.setState({
            id: evt.target.value
        });
    }

    onSubmit(evt) {
        evt.preventDefault();
        if (this.state.id){
            const Url = (`https://med-directory-cen.herokuapp.com/directory/${this.state.id}`);

            Axios.delete(Url)
            .then(res => console.log(res))
            .catch(err => console.log(err));

            this.setState({ id: ""})
        }
        
    }

    render() {
        // const { query, result } = this.state;
        return (
            <div className="WidthThang">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h2 className="EditProfileHeadr">
                            We would apreciate your feedback
                        </h2>
                        <div>
                            <input type="text" value={this.state.id} placeholder="Type your profile id" onChange={this.onChangeId} />
                        </div>
                        <div>
                        <button type="submit" value="Submit" className="xyz">Delete Profile</button>
                        </div>
                    </div>
                </form>
                <div className="yzx">
                    <Link to="/myaccount" className="atag"><button className="xyz back">back</button></Link>
                </div>
            </div>
        )
    }
}

export default DeleteProfile;