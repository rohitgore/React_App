import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.scss';
import './Navigation/Navbar'
import {Route,Switch} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import Navbar from './Navigation/Navbar';
import TestComponent from './TestComponent';
import MainWeather from './Weather_component/MainWeather.component';
import ToDo from './Todo_Component/ToDo';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={ToDo}/>
        <Route path="/Todo" component={ToDo}/>
        <Route path="/WeatherInfo" component={MainWeather}/>
      </Switch>
    </div>
  );
}

export default App;
