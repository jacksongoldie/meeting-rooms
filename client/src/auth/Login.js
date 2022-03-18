import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onSetUser, onSetTabs, tab }) {

    const navigate = useNavigate();

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
        fetch('/login', {
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
                <br />
                <label>Password:</label>
                <input 
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
                <br />
                <button type="submit">Submit</button>
                <p>{errors}</p>
            </form>
        </div>
    )
}

export default Login;