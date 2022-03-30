import { useState } from 'react'
import Moment from 'react-moment';
import { makeStyles, Grid, Card, CardContent, Button } from '@material-ui/core';
import UpdateReservationForm from './UpdateReservationForm';

const useStyles = makeStyles(theme => ({
    card: {
        margin: theme.spacing(2),
    }
}))

function ReservationCard({ reservation, onDeleteReservation, onUpdateUser, onUpdateReservation, isPreviousReservation }) {
    const classes = useStyles();
    const [isDeleting, setIsDeleting] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [confirmation, setConfirmation] = useState('')

    function handleDelete(){
        fetch(`/reservations/${reservation.id}`, {
            method: 'DELETE'
        })
        .then(onDeleteReservation(reservation))
    }

    function handleClick(){
        setIsDeleting((mUV) => !mUV)
    }

    function handleEdit(){
        setIsEditing((mUV) => !mUV)
    }

    function onSetConfirmation(string){
        setConfirmation(string)
        setIsEditing((mUV) => !mUV)
    }
    return (
        <div>
            <Grid item >
            <Card className={classes.card}>
                <CardContent>
                    <h2><Moment format="MM/DD/YYYY">{reservation.start_date}</Moment> - <Moment format="MM/DD/YYYY">{reservation.end_date}</Moment></h2>
                    <p>{reservation.room.name}</p>
                    <img src={reservation.room.image_url} alt={reservation.room.name} width='300px'/>
                    <br/>
                    {isPreviousReservation ? null :
                    <>
                    {isDeleting ?
                        <>
                        <p>Are you sure?</p>
                        <Button onClick={handleDelete} style={{ marginRight: '1vh'}}>Yes</Button>
                        <Button onClick={handleClick}>Go Back</Button>
                        </>:
                        <>
                        {isEditing ? null : <Button onClick={handleClick} style={{ marginRight: '1vh'}}>Cancel</Button>}
                        </>
                    }
                    {isEditing ?
                        <>
                        <UpdateReservationForm key={reservation.id} reservation={reservation} onUpdateReservation={onUpdateReservation} onUpdateUser={onUpdateUser} onSetConfirmation={onSetConfirmation} />
                        <Button onClick={handleEdit} style={{ marginRight: '1vh'}}>Go Back</Button>
                        </> :
                        <>
                        {isDeleting ? null : <Button onClick={handleEdit}>Edit</Button>}
                        {confirmation !== '' ? <p style={{ width: '290px' }}>{confirmation}</p> : null}
                        </>
                    }
                    </>}
                </CardContent>
            </Card>
            </Grid>
        </div>
    )
}

export default ReservationCard;