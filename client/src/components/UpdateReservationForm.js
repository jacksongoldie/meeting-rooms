import { useState } from 'react';
import { FormControl, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

function UpdateReservationForm({ reservation, onSetConfirmation, onUpdateUser, onUpdateReservation }) {
    const {start_date, end_date, id} = reservation;
    const [startDate, setStartDate] = useState(start_date.slice(0,10))
    const [endDate, setEndDate] = useState(end_date.slice(0,10));
    const [errors, setErrors] = useState([]);

    console.log(startDate, start_date)
    console.log(endDate, end_date)
    function handleEditSubmit(e){
        e.preventDefault();

        const reservation = {
            id: id,
            start_date: startDate,
            end_date: endDate
        }
        fetch(`/reservations/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservation)
        })
        .then(r => {
            if(r.ok){
                r.json().then((res) => {
                    onUpdateReservation(res)
                    const start = res.start_date.slice(5, 10) + "-" + res.start_date.slice(0,4)
                    const end = res.end_date.slice(5, 10) + "-" + res.end_date.slice(0,4)
                    onSetConfirmation(`Your reservation dates have been updated to ${start} through ${end}!`)
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
            <FormControl onSubmit={handleEditSubmit} >
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
                <Button type="submit">Update Reservation</Button>
                <br/>
                {errors ? errors.map((err) => <p style={{ fontStyle: 'italic', width: 220 }}>{err}</p>) : null}
            </Stack>
            </FormControl>
        </div>

    )
}

export default UpdateReservationForm;