import RoomsContainer from "./RoomsContainer";
import SearchBar from "./SearchBar";
import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

const Home = ({ user, onUpdateUser, onSetUser, onSetTabs }) => {

    const [rooms, setRooms] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        fetch('/rooms')
        .then(r => r.json())
        .then(setRooms)

    }, [])

    function handleChange(e){
      setSearchValue(e.target.value.toLowerCase())
    }
    function handleSearch(searchValue){
      setSearchValue(searchValue)
    }

    function roomsToDisplay(){
      if(searchValue === ''){
        return rooms;
      }
      else if(searchValue !== ''){
        return rooms.filter((room) => room.name.toLowerCase().includes(searchValue) || room.amenities.toLowerCase().includes(searchValue) || room.description.toLowerCase().includes(searchValue))
      }
    }

  return (
    <div style={{ alignContent: 'center' }}>
        {user ? 
        <Typography
        variant='h4'
        component='h2'
        color='textSecondary'
        >Welcome, {user.name}!</Typography> :
        <Typography
        variant='h4'
        component='h2'
        color='textSecondary'
        >Login to make your next reservation!</Typography>}
        <div style={{ marginTop: '3vh', marginBottom: '3vh' }}>
        <SearchBar handleSearch={handleSearch} handleChange={handleChange} searchValue={searchValue} />
        </div>
        <RoomsContainer rooms={roomsToDisplay()} user={user} onUpdateUser={onUpdateUser} onSetTabs={onSetTabs} />
    </div>
  )
}

export default Home