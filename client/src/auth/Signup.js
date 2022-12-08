import { useState } from 'react';
import { TextField, Button, Select, Paper, FormControl, InputLabel, Box, MenuItem, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';

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

function Signup({ accounts, onSetUser }) {

    let navigate = useNavigate()
    
    const classes = useStyles();
    const blankForm = {
        name: "",
        email: "",
        account_id: "",
        username: "",
        password: ""
    }
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState(blankForm);

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e){
        e.preventDefault();
        fetch('https://meetingrooms.onrender.com/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(r => {
            if(r.ok){
                r.json().then((user) => {
                    setFormData(blankForm)
                    onSetUser(user)
                    navigate(`/`)
                })
            }
            else{
                r.json().then((err) => {
                    setErrors(err.errors)
                })
            }
        })
        
    }

    const accountOptions = accounts.map((c) => <MenuItem key={c.id} value={c.id}>{c.business_name}</MenuItem>)

    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
            <form onSubmit={handleSubmit} style={{ width: '80%'}}>
                <Paper className={classes.paper}>
                <Box textAlign='center'>
                <TextField
                    margin='dense'
                    className={classes.text}
                    label='Name:'
                    type="text" 
                    name='name' 
                    value={formData.name} 
                    onChange={handleChange}
                    required
                />
                <TextField 
                    margin='dense'
                    className={classes.text}
                    label='Email:'
                    type="text" 
                    name='email' 
                    value={formData.email} 
                    onChange={handleChange}
                    required
                />
                <FormControl 
                    required
                    className={classes.text}
                    margin='dense'>
                <InputLabel>Company:</InputLabel>
                <Select
                    margin='dense'
                    label="Company:"
                    name="account_id" 
                    value={formData.account_id} 
                    onChange={handleChange} 
                    required 
                >
                    {accountOptions}
                </Select>
                </FormControl>
                <TextField
                    className={classes.text}
                    margin='dense'
                    label="Username:"
                    type="text" 
                    name='username' 
                    value={formData.username} 
                    onChange={handleChange}
                    required
                />
                <TextField
                    margin='dense'
                    className={classes.text}
                    label="Password:"
                    type="password" 
                    name='password' 
                    value={formData.password} 
                    onChange={handleChange}
                    required
                />
                {errors.length > 0 ? errors.map((err) => <Typography style={{ margin: '1vh' }}>{err}</Typography>) : null }
                <Button
                variant='contained'
                type='submit'
                className={classes.button}>Submit</Button>
                </Box>
                </Paper>
            </form>
        </div>
    )
}

export default Signup; 