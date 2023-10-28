import React, { useState } from "react";

import "./login.css"
import { useDispatch } from "react-redux";
import { registUserFromApiCalls } from "../../api/apiCalls";

const Login = () => {
    const dispatch = useDispatch()

    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const myObject = {username, password, email, phone}

    const handleSubmit = (e) => {
        e.preventDefault()
        registUserFromApiCalls(dispatch, myObject)
    }    

    console.log(myObject)


    return (
        <>
            <div className="container-login">
                <div className="login-form">
                    <div className="form">
                        <h2>Login</h2>
                        <form action="">
                            <label>Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} />
                            <label>Password</label>
                            <input type="text" onChange={(e) => setPassword(e.target.value)} />
                            <label>Email</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} />
                            <label>Phone</label>
                            <input type="text" onChange={(e) => setPhone(e.target.value)} />
                        </form>
                            <button onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;