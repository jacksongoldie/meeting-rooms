import { useState } from 'react'
import Moment from 'react-moment';
import { makeStyles, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import UpdateReservationForm from './UpdateReservationForm';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

function ReservationCard({ reservation, onDeleteReservation, user, onUpdateUser }) {
    const classes = useStyles();
    const [isDeleting, setIsDeleting] = useState(false)
    const [isEditing, setIsEditing] = useState(false)

    function handleDelete(){
        fetch(`/reservations/${reservation.id}`, {
            method: 'DELETE'
        })
        .then(onDeleteReservation(reservation))
    }

    function handleSubmit(){
        console.log(reservation)
    }

    function handleClick(){
        setIsDeleting((mUV) => !mUV)
    }

    function handleEdit(){
        setIsEditing((mUV) => !mUV)
    }
    return (
        <div className={classes.root}>
            <Grid
            container
            spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="flex-start">
                <Grid item >
            <Card>
                <CardContent>
                    <h2><Moment format="MM/DD/YYYY">{reservation.start_date}</Moment> - <Moment format="MM/DD/YYYY">{reservation.end_date}</Moment></h2>
                    <p>{reservation.room.name}</p>
                    <img src={reservation.room.image_url} alt={reservation.room.name} width='300px'/>
                    <br/>
                    {isDeleting ?
                        <>
                        <p>Are you sure?</p>
                        <button onClick={handleDelete} style={{ marginRight: '1vh'}}>Yes</button>
                        <button onClick={handleClick}>Go Back</button>
                        </>:
                        <>
                        {isEditing ? null : <button onClick={handleClick} style={{ marginRight: '1vh'}}>Cancel</button>}
                        </>
                    }
                    {isEditing ?
                        <>
                        <UpdateReservationForm />
                        <button onClick={handleEdit} style={{ marginRight: '1vh'}}>Go Back</button>
                        <button onClick={handleSubmit}>Submit</button>
                        </> :
                        <>
                        {isDeleting ? null : <button onClick={handleEdit}>Edit</button>}
                        </>
                    }
                </CardContent>
            </Card>
            </Grid>
            </Grid>
        </div>
    )
}

export default ReservationCard;