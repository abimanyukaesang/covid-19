import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../config/api';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            membersResult: []
        };
    }

    componentDidMount() {
        axios.get(`${API.rapidapi.baseUrl}?country=indonesia`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": API.rapidapi.rapidapi_host,
                "x-rapidapi-key": API.rapidapi.rapidapi_key
            }
        })

            .then(response => {
                console.log(response);
                this.setState({ membersResult: response.data.response });
            })

            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='row'>
                {this.state.membersResult.map((member, index) => (
                    <div className="col-md-12" key={member.country}>

                        <div className='bg-purple'>
                            <h4>{member.country}</h4>
                            Total Kasus : {member.cases.total} |
                            Kasus Baru : {member.cases.new}
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}

export default SearchResult;