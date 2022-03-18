import { useState } from 'react';
import ReservationForm from './ReservationForm';
import { Grid, makeStyles, Paper } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }));

function RoomCard({ room, user, onUpdateUser, onSetTabs }) {

    const classes = useStyles();
    const navigate = useNavigate();

    const [showForm, setShowForm] = useState(false);
    const [confirmation, setConfirmation] = useState('')
    

    function createReservation(){
        if(user !== null){
            setShowForm((mUV) => !mUV)
            setConfirmation('')
            console.log(room.id, user.id, showForm)
        }
        else{
            navigate('/login')
            onSetTabs('/login')
        }
        
    }

    function onSetConfirmation(confirmationString){
        setConfirmation(confirmationString)
    }    

    return (
        <div>
                <Grid item m>
                <Paper className={classes.paper}>
                    <img src={room.image_url} alt="conference room" style={{ height: '300px'}} />
                    <h2>{room.name} #{room.number}</h2>
                    <button onClick={createReservation}>Reserve Room</button>
                    {
                        showForm ? 
                        <ReservationForm user={user} room={room} setShowForm={setShowForm} onUpdateUser={onUpdateUser} onSetConfirmation={onSetConfirmation} /> :
                        null
                    }
                     {confirmation !== '' ? <p style={{ fontWeight: 'bold', fontStyle:'italic' }}>{confirmation}</p> : null}
                    <p>{room.description}</p>
                    <p>Amenities: {room.amenities}</p>
                </Paper>
            </Grid>
        </div>
    )
}

export default RoomCard;