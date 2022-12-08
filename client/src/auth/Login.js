import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'inline-block'
    },
    text: {
        width: '100%'
    },
    button: {
        width: '50%'
    }
  }));

function Login({ onSetUser, onSetTabs, tab }) {

    const navigate = useNavigate();
    const classes = useStyles();

    const blankLogin = {
        username: "",
        password: ""
    }
    const [formData, setFormData] = useState(blankLogin)
    const [errors, setErrors] = useState(null)

    function handleChange(e){
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://meetingrooms.onrender.com/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json()
                .then((u) => {
                    onSetUser(u)
                    console.log(u)
                    setFormData(blankLogin)
            })
            navigate(tab)
            onSetTabs(tab)
        }
            else{
                r.json().then((err) => {
                    setErrors(err.errors)
            })
        }
    })
}

    return (
        <div style={{ diplay: 'flex', justifyContents: 'center', textAlign: 'center' }}>
            <Paper className={classes.paper}>
            <form onSubmit={handleSubmit}>
                <TextField
                margin='normal'
                className={classes.text}
                label='Username'
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                <TextField
                margin='normal'
                className={classes.text}
                label='Password'
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <Button className={classes.button} variant='contained' type="submit">Submit</Button>
                <p>{errors}</p>
            </form>
            </Paper>
        </div>
    )
}

export default Login;