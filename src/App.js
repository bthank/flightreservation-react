import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom'
import FindFlights from './components/FindFlights';
import DisplayFlights from './components/DisplayFlights';
import PassengerDetails from './components/PassengerDetails';
import ConfirmReservation from './components/ConfirmReservation';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  exact path="/" component={FindFlights}/>
        <Route  path="/displayFlights/:from/:to/:departureDate" component={DisplayFlights}/>
        <Route  path="/passengerDetails" component={PassengerDetails}/>
        <Route  path="/confirmReservation" component={ConfirmReservation}/>
      </Switch>
    </div>
  );
}

export default App;
