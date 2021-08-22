import React from 'react';
import axios from 'axios';

class PassengerDetails extends React.Component {

    state = {};

    componentWillMount(){
        axios.get("/flightServices/flights/" + this.props.match.params.flightId)
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

                <h2>Passenger Details</h2>
                <form>
                    First Name: <input type="text" name="passengerFirstName" onChange={(event) => {this.passengerFirstName = event.target.value}}/> <br/>
                    Middle Name: <input type="text" name="passengerMiddleName" onChange={(event) => {this.passengerMiddleName = event.target.value}}/> <br/>
                    Last Name: <input type="text" name="passengerLastName" onChange={(event) => {this.passengerLastName = event.target.value}}/> <br/>
                    Email: <input type="text" name="passengerEmail" onChange={(event) => {this.passengerEmail = event.target.value}}/> <br/>
                    Phone Number: <input type="text" name="passengerPhone" onChange={(event) => {this.passengerPhone = event.target.value}}/> <br/>
                    <h2>Credit Card Details</h2>
                    Credit Card No: <input type="text" name="cCardNumber" onChange={(event) => {this.cCardNumber = event.target.value}}/> <br/>
                    Expiration Date: <input type="text" name="expirationDate" onChange={(event) => {this.expirationDate = event.target.value}}/> <br/>
                    Security Code: <input type="text" name="securityCode" onChange={(event) => {this.securityCode = event.target.value}}/> <br/>
                    <button>Confirm</button>
                </form>

            </div>
                );

    }
}

export default PassengerDetails;