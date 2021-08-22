import React from 'react';

class ConfirmReservation extends React.Component {

        render(){
            return (
                <div>
                    <h2>Flight Reservation is complete.  The confirmation code is {this.props.match.params.reservationId}</h2>
                </div>
                    );

        }
}

export default ConfirmReservation;