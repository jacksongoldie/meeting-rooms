import { useState } from 'react';
import ReservationForm from './ReservationForm';
import { makeStyles, Card, CardContent, CardMedia } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(4),
      margin: theme.spacing(4),
      textAlign: 'center',
      alignContent: 'center',
      color: theme.palette.text.secondary
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
            <Card className={classes.paper}>
                <CardContent>
                  <CardMedia
                  component="img"
                  width="200px"
                  height='600px'
                  image={room.image_url}
                  alt="conference room"
                  />
                    <h2>{room.name} #{room.number}</h2>
                    {
                        showForm ? 
                        <>
                        <button onClick={(mUV) => setShowForm(!mUV)}>Go Back</button>
                        <ReservationForm user={user} room={room} setShowForm={setShowForm} onUpdateUser={onUpdateUser} onSetConfirmation={onSetConfirmation} />
                        </> :
                        <button onClick={createReservation}>Reserve Room</button>
                    }
                     {confirmation !== '' ? <p style={{ fontWeight: 'bold', fontStyle:'italic' }}>{confirmation}</p> : null}
                    <p>{room.description}</p>
                    <p>Amenities: {room.amenities}</p>
                </CardContent>
                </Card>
        </div>
    )
}

export default RoomCard;