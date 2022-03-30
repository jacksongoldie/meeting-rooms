import Login from "../auth/Login";
import ReservationCard from "./ReservationCard";
import { makeStyles, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

function ReservationsContainer({ user, onSetUser, onDeleteReservation, onUpdateReservation, onSetTabs, onUpdateUser }) {
    const classes = useStyles();
    console.log(user)
    //CANNOT FIGURE OUT WHY IT IS READING THIS VARIABLE WHEN USER IS NULL???
    // const reservationCards = user.reservations.map((r) => <ReservationCard key={r.id} reservation={r} />)
    //LEFT OFF HERE TO SORT USER.RES

    //const upcomingReservations = user.reservations.filter((r) => Date.parse(r.end_date) > Date.now())
    //const pastReservations = user.reservations.filter((r) => Date.parse(r.end_date) < Date.now())

    return (
        <div>
            <div className={classes.root}>
                <Box textAlign='center'>
            {
                user ?
                <>
                <h2>{user.name}'s Upcoming Reservations</h2>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                    {user.reservations.filter((r) => Date.parse(r.end_date) > Date.now()).map((r) => <ReservationCard key={r.id} reservation={r} onDeleteReservation={onDeleteReservation} onUpdateReservation={onUpdateReservation} user={user} onUpdateUser={onUpdateUser} />)} 
                    </Grid>
                <h2>{user.name}'s Previous Reservations</h2>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start">
                    {user.reservations.filter((r) => Date.parse(r.end_date) < Date.now()).map((r) => <ReservationCard key={r.id} reservation={r} onDeleteReservation={onDeleteReservation} onUpdateReservation={onUpdateReservation} user={user} onUpdateUser={onUpdateUser} isPreviousReservation={true} />)} 
                    </Grid>
                </> :
                <>
                <h3>Must be logged in to view reservations.</h3>
                {/*THIS LOGIN NOT RETURNING ERRORS -- could i use props on login here to change the nav end point*/}
                <Login onSetUser={onSetUser} onSetTabs={onSetTabs} tab={'/myreservations'} />
                </>
            }
            </Box>
            </div>
        </div>
    )
}

export default ReservationsContainer;