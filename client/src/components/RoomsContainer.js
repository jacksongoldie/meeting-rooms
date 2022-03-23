import React from 'react';
import RoomCard from './RoomCard';

function RoomsContainer({ rooms, user, onUpdateUser, onSetTabs }) {

    const roomsToDisplay = rooms.map((room) => <RoomCard room={room} key={room.id} user={user} onUpdateUser={onUpdateUser} onSetTabs={onSetTabs} />)
    return (
        <div>
                {roomsToDisplay}
        </div>
    )
}

export default RoomsContainer;