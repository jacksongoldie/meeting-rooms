import Login from "../auth/Login";
import ReservationCard from "./ReservationCard";

function ReservationsContainer({ user, onSetUser, onDeleteReservation, onSetTabs, onUpdateUser }) {
    //console.log(user)
    //CANNOT FIGURE OUT WHY IT IS READING THIS VARIABLE WHEN USER IS NULL???
    // const reservationCards = user.reservations.map((r) => <ReservationCard key={r.id} reservation={r} />)
    //LEFT OFF HERE TO SORT USER.RES
    
    return (
        <div>
            {
                user ?
                <>
                <h2>{user.name}'s Upcoming Reservations</h2>
                {user.reservations.map((r) => <ReservationCard key={r.id} reservation={r} onDeleteReservation={onDeleteReservation} user={user} onUpdateUser={onUpdateUser} />)} 
                </> :
                <>
                <h3>Must be logged in to view reservations.</h3>
                {/*THIS LOGIN NOT RETURNING ERRORS -- could i use props on login here to change the nav end point*/}
                <Login onSetUser={onSetUser} onSetTabs={onSetTabs} tab={'/myreservations'} />
                </>
            }
        </div>
    )
}

export default ReservationsContainer;