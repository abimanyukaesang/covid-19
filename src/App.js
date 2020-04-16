import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import logo from '../src/images/logo-covid.svg';
import sad from '../src/images/sad.svg';
import smile from '../src/images/smile.svg';
import crying from '../src/images/crying.svg';
import {API} from '../src/config/api';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      members: []
    };
  }

  // componentDidMount (){
  //   axios.get('https://covid-193.p.rapidapi.com/statistics?country=indonesia', {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "covid-193.p.rapidapi.com",
  //       "x-rapidapi-key": "396f3135b4msh0f4046d1bce5308p1ac8a7jsn14095db32b8d"
  //     }
  //   })

  //   .then(response => {
  //     console.log(response);
  //     this.setState({members:response.data.response});
  //   })

  //   .catch(err => {
  //     console.log(err);
  //   });
  // }


  componentDidMount (){
    axios.get(`${API.rapidapi.baseUrl}?country=indonesia`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": API.rapidapi.rapidapi_host,
        "x-rapidapi-key": API.rapidapi.rapidapi_key
      }
    })

    .then(response => {
      console.log(response);
      this.setState({members:response.data.response});
    })

    .catch(err => {
      console.log(err);
    });
  }


  

  render() {
    return (

      <>
          <nav className="navbar navbar-light bg-light mb-3">
            <a className="navbar-brand"><img src={logo} alt='covid 19' /></a>
          </nav>

          <div className="container">
            <div className='row'>
              <div className='col-md-12'>
                <div id="homeBanner" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#homeBanner" data-slide-to="0" className="active"></li>
                    <li data-target="#homeBanner" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                          className='rounded' 
                          src="https://kotabogor.go.id/uploads/images/2020/covid19/Spanduk_Covid.jpg"
                          alt="covid-19"
                      />
                    </div>
                    <div className="carousel-item">
                      <img 
                          className='rounded'
                          src="https://kotabogor.go.id/uploads/images/2020/covid19/Spanduk_Corona_Germas.jpg"
                          alt="covid-19"
                      />
                    </div>
                  </div>
                </div>    
              </div>
            </div>

            <div className='row'>
              <div className='col-md-12'>
                <small className='d-block mt-5 mb-2'>Data diperbarui setiap 15 menit</small>
              </div>
            </div>

            <div className='row'>
              {this.state.members.map((member, index) => (
                <div className="col-md-12" key={member.country}>
                  
                  <div className='mb-2 p-3 bg-info list-box text-white'>
                    Total Kasus :{member.cases.total} |
                    Kasus Baru :{member.cases.new}
                  </div>

                  <div className='mb-2 p-3 bg-warning list-box'>
                    <div className="media">
                        <img src={sad} alt='Dalam Perawatan'/>
                        <div className="media-body">
                            Dalam Perawatan :
                            <h4>{member.cases.active}</h4>
                        </div>
                    </div>
                  </div>

                  <div className='mb-2 p-3 bg-success list-box text-white'>
                    <div className="media">
                      <img src={smile} alt='Dalam Perawatan'/>
                        <div className="media-body">
                            Sembuh :
                            <h4>{member.cases.recovered}</h4>
                        </div>
                    </div>
                  </div>

                  <div className='mb-2 p-3 bg-danger list-box text-white'>
                    <div className="media">
                      <img src={crying} alt='Dalam Perawatan'/>
                        <div className="media-body">
                            Total Meninggal :
                            <h4>{member.deaths.total}</h4>
                        </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

      </>
    )
  }
}
export default App;
