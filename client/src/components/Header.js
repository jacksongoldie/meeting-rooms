import { Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Header = ({ onSetTabs }) => {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/')
    onSetTabs('/')
  }

  return (
    <div>
      <Typography
      variant='h2'
      component='h1'
      align='left'
      color='textPrimary'
      onClick={handleClick}
      >
      Meeting Rooms</Typography></div>
  )
}

export default Header