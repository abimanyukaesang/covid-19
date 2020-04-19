import React, { Component } from 'react';
import axios from 'axios';
import sad from '../images/sad.svg';
import smile from '../images/smile.svg';
import crying from '../images/angel.svg';
import { API } from '../config/api';


class CityList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            members: [],
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
                this.setState({ members: response.data.response });
            })

            .catch(err => {
                console.log(err);
            });
    }



    render() {
        return (

            <>
                <div className='row'>
                    {this.state.members.map((member, index) => (
                        <div className="col-md-12" key={member.country}>

                            <div className='bg-purple'>
                                <h4>{member.country}</h4>
                                Total Kasus : {member.cases.total} |
                                Kasus Baru : {member.cases.new}
                            </div>

                            <div className='bg-purple'>
                                <div className="media">
                                    <img src={sad} alt='Dalam Perawatan' />
                                    <div className="media-body">
                                        Dalam Perawatan :
                                        <h4 className='text-warning'>{member.cases.active}</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-purple'>
                                <div className="media">
                                    <img src={smile} alt='Dalam Perawatan' />
                                    <div className="media-body">
                                        Sembuh :
                                        <h4 className='text-info'>{member.cases.recovered}</h4>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-purple'>
                                <div className="media">
                                    <img src={crying} alt='Dalam Perawatan' />
                                    <div className="media-body">
                                        Total Meninggal :
                                        <h4 className='text-danger'>{member.deaths.total}</h4>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </>
        )
    }
}
export default CityList;
