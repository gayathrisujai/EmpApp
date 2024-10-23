import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from '../axiosinterceptor';



const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();
    let updateUser = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    let sendData = () => {
        // if((user.username=="admin")&&(user.password=="12345"))
        // {
        //     sessionStorage.setItem("username","admin");
        //     navigate('/home');
        // }
        // else{
        //     alert("Invalid username or password")
        // }
        axiosInstance.post("http://localhost:3000/user/login", user)
            .then((res) => {
                console.log(res)
                alert(res.data.message)
                if (res.data.usertoken) {
                    localStorage.setItem("token", res.data.usertoken);
                    navigate('/home');
                }
            })
    }


    return (
        <>
            <h2 style={{ fontFamily: 'cursive', fontStyle: 'italic', marginTop: 200 }}>LOGIN </h2>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '45ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Email" variant="outlined" name='username' value={user.username} onChange={updateUser} /><br /><br />
                <TextField type='password' label="Password" variant="outlined" name='password' value={user.password} onChange={updateUser} /><br /><br />
                <Button variant="contained" sx={{ backgroundColor: 'darkblue', fontFamily: '-moz-initial' }} onClick={sendData}>Login</Button>
            </Box>
        </>
    )
}

export default Login