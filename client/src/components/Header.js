import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Header = ({ onSetTabs }) => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/')
    onSetTabs('/')
  }

  return (
    <div style={{ paddingBottom: '1.5vh'}}>
      <Typography
      variant='h2'
      component='h1'
      align='left'
      color='text'
      onClick={handleClick}
      >
      Meeting Rooms</Typography></div>
  )
}

export default Header