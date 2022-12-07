import { useState } from 'react';
import { FormControl, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import "react-datepicker/dist/react-datepicker.css";

function ReservationForm({ user, room, setShowForm, onUpdateUser, onSetConfirmation }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(null);
    const [errors, setErrors] = useState([]);

    function handleDateSubmit(e){
        e.preventDefault();

        const reservation = {
            user_id: 21,
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
        <div style={{ marginTop: "1vh" }}>
            <FormControl onSubmit={handleDateSubmit} >
            <Stack component="form" noValidate spacing={3}>
                <TextField
                    id="start_date"
                    label="Start Date"
                    type="date"
                    onChange={(e) => setStartDate(e.target.value)}
                    defaultValue={startDate}
                    sx={{ width: 290 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                    id="end_date"
                    label="End Date"
                    type="date"
                    onChange={(e) => setEndDate(e.target.value)}
                    defaultValue={endDate}
                    sx={{ width: 290 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                <Button type="submit">Submit Reservation</Button>
                {errors ? errors.map((err) => <p style={{ fontStyle: 'italic', fontWeight: 'bold', width: 220, textAlign: 'left' }}>{err}</p>) : null}
            </Stack>
            </FormControl>
        </div>
    )
}

export default ReservationForm