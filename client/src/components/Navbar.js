import { Link } from "react-router-dom";
import Header from "./Header";
import { Tab, Tabs, AppBar, Toolbar, CssBaseline } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      marginLeft: theme.spacing(5),
      "&:hover": {
        color: "orange",
        borderBottom: "1px solid white",
      },
    },
  }));

function Navbar({ user, onSetUser, tabs, onSetTabs }) {

    const classes = useStyles();

    function handleClick(){
        fetch('https://meetingrooms.onrender.com/logout', {
            method: 'DELETE'
        })
        .then(onSetUser(null))
        onSetTabs('/')
    }
    return (
        <div>
            <AppBar position='static'>
            <CssBaseline />
                <Toolbar>
                <div className={classes.logo}>
                <Header link={Link} onSetTabs={onSetTabs} />
                </div>
                    <Tabs value={tabs} className={classes.navlinks}>
                        <Tab
                        className={classes.link}
                        label='Home'
                        value="/"
                        to='/'
                        component={Link}
                        onClick={() => onSetTabs('/')} />
                        <Tab
                        className={classes.link}
                        label='My Reservations'
                        value="/myreservations"
                        to='/myreservations'
                        component={Link}
                        onClick={() => onSetTabs('/myreservations')} />
                        {user ?
                        <Tab
                        className={classes.link}
                        label='Logout'
                        value="/logout"
                        to='/logout'
                        onClick={handleClick}
                        component={Link}/> :
                        <Tab
                        className={classes.link}
                        label='Login'
                        value="/login"
                        to='/login'
                        component={Link}
                        onClick={() => onSetTabs('/login')}/>}
                        <Tab
                        className={classes.link}
                        label='Signup'
                        value="/signup"
                        to='/signup'
                        component={Link}
                        onClick={() => onSetTabs('/signup')}/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;