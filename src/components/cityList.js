import React, { Component } from 'react';

import sad from '../src/images/sad.svg';
import smile from '../src/images/smile.svg';
import crying from '../src/images/crying.svg';

class cityList extends Component {
    render() {
        return (
            <div className='row'>
                {this.state.members.map((member, index) => (
                    <div className="col-md-12" key={member.country}>

                        <div className='bg-purple'>
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
        )
    }
}

export default cityList;