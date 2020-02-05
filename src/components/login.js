import React, { useState } from 'react'

export default function Login(props) {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const submit= (e)=> {
        e.preventDefault()
        if(props.submit){
            props.submit({username,password});
        }
    }

    return (
        <form className="login-form" onSubmit={submit} method="post">
            <h1>Login</h1>
            <div className="form-field">
                <i className="fas fa-user"></i>
                <input type="text" name="username" id="username" onChange={(e)=>{setusername(e.target.value)}} className="form-field" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder=" " required />
                <label htmlFor="username">Username</label>
            </div>
            <div className="form-field">
                <i className="fas fa-lock"></i>
                <input type="password" name="password" id="password" onChange={(e)=>{setpassword(e.target.value)}} className="form-field" placeholder=" " required />
                <label htmlFor="password">Password</label>
            </div>
            <button type="submit" value="Login" className="btn">Login</button>
        </form>
    )
}
