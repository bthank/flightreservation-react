import React from 'react';
import axios from 'axios';

class PassengerDetails extends React.Component {

    state = {};

    componentWillMount(){
        axios.get("http://localhost:8080/flightServices/flights/" + this.props.match.params.flightId)
            .then(response => {
                /* the flight info that comes in will become the new state  */
                this.setState(response.data);
            })
    }

    render(){
        return (
            <div>
                <h2>Confirm Reservation:</h2>
                <h2>Flight Details:</h2>
                Airline          : {this.state.operatingAirlines} <br/>
                Departure City   : {this.state.departureCity} <br/>
                Arrival City     : {this.state.arrivalCity} <br/>
                Date of Departure: {this.state.dateOfDeparture} <br/>
            </div>
                );

    }
}

export default PassengerDetails;