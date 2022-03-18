import React from 'react';
import RoomCard from './RoomCard';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}))

function RoomsContainer({ rooms, user, onUpdateUser, onSetTabs }) {
    const classes = useStyles();

    const roomsToDisplay = rooms.map((room) => <RoomCard room={room} key={room.id} user={user} onUpdateUser={onUpdateUser} onSetTabs={onSetTabs} />)
    return (
        <div className={classes.root}>
            <Grid container>
                {roomsToDisplay}
            </Grid>
        </div>
    )
}

export default RoomsContainer;