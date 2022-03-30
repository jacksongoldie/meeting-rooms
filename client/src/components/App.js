import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import ReservationsContainer from './ReservationsContainer';
import Signup from '../auth/Signup';
import Login from '../auth/Login';
import { Container } from '@material-ui/core';

function App() {

  const [accounts, setAccounts] = useState([])
  const [user, setUser] = useState(null)
  const [tabs, setTabs] = useState('/')

  useEffect (() => {
    fetch('/accounts')
    .then(r => r.json())
    .then(setAccounts)
    //FETCH VS STATE TO RENDER USER TERNARY - FIX IT
    fetch('/me')
    .then(r => {
        if(r.ok){
            r.json()
            .then((u) => setUser(u))
        }
        else{
            setUser(null)
        }
    })

  }, [])

  function onSetUser(user){
    setUser(user)
  }

  function onUpdateUser(reservation){
    setUser({...user, reservations: [reservation, ...user.reservations]})
  } 

  function onUpdateReservation(reservation){
    const reservations = user.reservations.map((r) => {
      if(r.id === reservation.id){
        return reservation
      }
      else{
        return r
      }
      })
      setUser({...user, reservations: reservations})
  }

  function onDeleteReservation(reservation){
    const updatedUserReservations = user.reservations.filter((res) => {
      if(res !== reservation){
        return res;
      }
      else{
        return null;
      }
    })
    setUser({...user, reservations: updatedUserReservations})
  }

  function onSetTabs(tab){
    setTabs(tab)
  }
  return (
    <div className="App">
      <Navbar user={user} onSetUser ={onSetUser} onSetTabs={onSetTabs} tabs={tabs} />
      <Container maxWidth="xl" style={{ marginTop: '5vh' }}>
      <Routes>
        <Route path='/' element={<Home user={user} onSetUser={onSetUser} onSetTabs={onSetTabs} onUpdateUser={onUpdateUser} />} />
        <Route path='/myreservations' element={<ReservationsContainer user={user} onSetUser={onSetUser} onUpdateUser={onUpdateUser} onDeleteReservation={onDeleteReservation} onUpdateReservation={onUpdateReservation} onSetTabs={onSetTabs} />} />
        <Route path='/signup' element={<Signup accounts={accounts} />} />
        <Route path='/login' element={<Login onSetUser={onSetUser} onSetTabs={onSetTabs} tab={'/'}/>} />
        <Route path='/logout' element={<Home user={user} onSetUser={onSetUser} />} />
      </Routes>
      </Container>
    </div>
  );
}

export default App;
