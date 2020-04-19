import React, { Component } from 'react';
import './App.css';
import logo from '../src/images/logo-covid-white.svg';

import slide1 from '../src/images/banner-covid1.jpg';
import slide2 from '../src/images/banner-covid2.jpg';
import SearchCity from './components/searchCity';
import SearchResult from './components/searchResult';
import CityList from './components/cityList';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      members: [],
      keyword: '',
      citiesResultSearch: null
    };
  }

  
  changeKeywordHandler = (event) => {
    this.setState({ keyword: event.target.value });
  }



  render() {
    return (

      <>
        <nav className="navbar navbar-light bg-header mb-3">
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
                      src={slide1}
                      alt="covid-19"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className='rounded'
                      src={slide2}
                      alt="covid-19"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12'>
              <small className='d-block mt-4 mb-2'>Data diperbarui setiap 15 menit</small>
            </div>
          </div>

          <CityList/>

          {/* <SearchCity
            value={this.state.keyword}
            onChange={this.changeKeywordHandler}
          />

          <SearchResult/> */}
        

        </div>

        <div className='footer'>
          <span></span>
        </div>
      </>
    )
  }
}
export default App;
