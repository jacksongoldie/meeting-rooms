import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReservationForm({ user, room, setShowForm, onUpdateUser, onSetConfirmation }) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [errors, setErrors] = useState([]);

    function handleDateSubmit(e, startDate, endDate){
        e.preventDefault();

        const reservation = {
            user_id: user.id,
            room_id : room.id,
            start_date: startDate,
            end_date: endDate
        }
        
        fetch('/reservations', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reservation)
        })
            .then(r => {
                if(r.ok){
                    r.json().then((res) => {
                        setShowForm(false)
                        setStartDate(null)
                        setEndDate(null)
                        onUpdateUser(res)
                        const start = res.start_date.slice(5, 10) + "-" + res.start_date.slice(0,4)
                        const end = res.end_date.slice(5, 10) + "-" + res.end_date.slice(0,4)
                        onSetConfirmation(`Your reservation is set for the ${res.room.name} || ${start} through ${end}!`)
                    }
                    )
                }
                else{
                    r.json().then((r) => {
                        setErrors(r.errors)
                    })
                } 
            })
    }

    

    return (
        <div>
            <div>
                <form onSubmit={(e) => handleDateSubmit(e, startDate, endDate)}>
                <p>Select start date:</p>
                <DatePicker selected={startDate} onChange={(date:Date) => {setStartDate(date)}}/>
                <p>Select end date:</p>
                <DatePicker selected={endDate} onChange={(date:Date) => setEndDate(date)}/>
                <button type="submit">Submit Reservation</button>
                {errors.length > 0 ? errors.map((err) => <p style={{ fontStyle: 'italic' }}>{err}</p>) : null}
                </form>
            </div>
        </div>
    )
}

export default ReservationForm