import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    let clearUser = () => {
        localStorage.removeItem("token");
        navigate('/')
    }
    return (
        <>
        {/* <div>Navbar</div> */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="inherit" sx={{backgroundColor:"gray-dark"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >

                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 2 , fontFamily:'cursive'}}>
                        Employees
                    </Typography>
                    {/* Conditionally render buttons based on the current route */}
                    {location.pathname === '/home' ? (
                        <>
                            <Button href='/home' color="inherit" sx={{fontFamily:'cursive'}}>Home</Button>
                            <Button href='/add' color="inherit" sx={{fontFamily:'cursive'}}>Add New</Button>
                            <Button color='inherit' onClick={clearUser} sx={{fontFamily:'cursive'}}>Logout</Button>
                        </>
                    ) : location.pathname === '/' ? (
                        <Button href='/' color="inherit"></Button>
                    ) : null}
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar