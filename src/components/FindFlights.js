import React from 'react';

class FindFlights extends React.Component {


    handleSubmit(event) {
        // use this to naviagate to a different url;  pass params as part of the route url
        this.props.history.push('displayFlights'+'/'+this.from+'/'+this.to+'/'+this.departureDate);
    }

    render(){
        return (
            <div>
                <h2>Find Flights:</h2>
                <form>
                    From: <input type="text" name="from" onChange={(event) => {this.from = event.target.value}}/> 
                    To: <input type="text" name="to" onChange={(event) => {this.to = event.target.value}}/> 
                    Departure Date: <input type="text" name="departureDate" onChange={(event) => {this.departureDate = event.target.value}}/> 
                    <button onClick={this.handleSubmit.bind(this)}>Search</button><br/>

                </form>
            </div>
                );

    }
}

export default FindFlights;