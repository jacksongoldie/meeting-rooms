import { useState } from 'react'

function Signup({ accounts }) {
    
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
        fetch('/signup', {
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
                })
            }
            else{
                r.json().then((err) => {
                    setErrors(err.errors)
                })
            }
        })
        
    }

    const accountOptions = accounts.map((c) => <option key={c.id} value={c.id}>{c.business_name}</option>)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    name='name' 
                    value={formData.name} 
                    onChange={handleChange}
                />
                <br />
                <label>Email:</label>
                <input 
                    type="text" 
                    name='email' 
                    value={formData.email} 
                    onChange={handleChange}
                />
                <br />
                <label>Company:</label>
                <select 
                    name="account_id" value={formData.account_id} onChange={handleChange} required 
                >
                    <option 
                    value=""
                    hidden >
                        Select...
                    </option>
                    {accountOptions}
                </select>
                <br />
                <label>Username:</label>
                <input 
                    type="text" 
                    name='username' 
                    value={formData.username} 
                    onChange={handleChange}
                />
                <br />
                <label>Password:</label>
                <input 
                    type="text" 
                    name='password' 
                    value={formData.password} 
                    onChange={handleChange}
                />
                <br />
                <button>Submit</button>
                {errors.length > 0 ? errors.map((err) => <ul><li>{err}</li></ul>) : null }
            </form>
        </div>
    )
}

export default Signup; 