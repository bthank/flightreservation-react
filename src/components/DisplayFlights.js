import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';  

class DisplayFlights extends React.Component {

    state= {
        flightData: []
    }

    componentWillMount(){
        console.log('from=',this.props.match.params.from);
        console.log('to=', this.props.match.params.to);
        console.log('departureDate=',this.props.match.params.departureDate);

        axios.get('/flightServices/flights' +
        '?from=' + this.props.match.params.from +
        '&to='   + this.props.match.params.to + 
        '&departureDate=' + this.props.match.params.departureDate)
            .then(response => {
                const flightData = response.data;
                this.setState({flightData});
                console.log(flightData);
            }).catch(error => {
                console.error('Error',error);
            })  
    }

    render(){
        return (
            <div>
                <h2>Flights</h2>
                <table>
                    <thead>
                        <th>Airlines</th>
                        <th>Departure City</th>
                        <th>Arrival City</th>
                        <th>Departure Date and Time</th>
                    </thead>
                    <tbody>
                        {this.state.flightData.map(flight => <RowCreator item={flight}/>)}
                    </tbody>
                </table>
            </div>
                );

    }
}


class RowCreator extends React.Component {

    render() {
        var flight = this.props.item;
        return <tr>
            <td>{flight.operatingAirlines}</td>
            <td>{flight.departureCity}</td>
            <td>{flight.arrivalCity}</td>
            <td>{flight.estimatedDepartureTime}</td>
            <td><Link to={'/passengerDetails/' + flight.id}>Select</Link></td>
        </tr>
    }
}




export default DisplayFlights;