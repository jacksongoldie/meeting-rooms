import React from 'react'
import Moment from 'react-moment';

function ReservationCard({ reservation, onDeleteReservation }) {
    console.log(reservation)

    function handleDelete(){
        fetch(`/reservations/${reservation.id}`, {
            method: 'DELETE'
        })
        .then(onDeleteReservation(reservation))
    }
    return (
        <div>
            <h2><Moment format="MM/DD/YYYY">{reservation.start_date}</Moment> - <Moment format="MM/DD/YYYY">{reservation.end_date}</Moment></h2>
            <p>{reservation.room.name}</p>
            <button onClick={handleDelete}>Cancel Reservation</button>
            <img src={reservation.room.image_url} alt={reservation.room.name} />
        </div>
    )
}

export default ReservationCard;