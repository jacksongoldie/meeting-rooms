import RoomsContainer from "./RoomsContainer";
import SearchBar from "./SearchBar";
import { useState, useEffect } from 'react';
import { Typography, Box, Paper, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

const Home = ({ user, onUpdateUser, onSetTabs }) => {
    const classes = useStyles();
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
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <Box textAlign='center'>
        <Box display='inline-block'>
      <Paper className={classes.paper}>
        {user ? 
        <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        >Welcome, {user.name}!</Typography> :
        null
        // <Typography
        // variant='h6'
        // component='h2'
        // color='textSecondary'
        // >Login to make your next reservation!</Typography>}
}
        <div style={{ marginTop: '2vh', marginBottom: '2vh' }}>
        <SearchBar handleSearch={handleSearch} handleChange={handleChange} searchValue={searchValue} />
        </div>
        </Paper>
        </Box>
        <RoomsContainer rooms={roomsToDisplay()} user={user} onUpdateUser={onUpdateUser} onSetTabs={onSetTabs} />
        </Box>

    </div>
  )
}

export default Home