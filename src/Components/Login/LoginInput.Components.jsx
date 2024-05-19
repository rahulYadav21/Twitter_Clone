import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './LoginInput.Components.css';
import { FormControl, TextField, Button, Typography } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect } from "react";


export default function LoginInput(){

    const navigate = useNavigate()
        useEffect(()=>{
            navigate('/LoginBoxInput')
        },[])

    return (
        <>
        <div className="login_container">
            <Outlet/>
        </div>
        <div className="LoginInput_twitter">
            <TwitterIcon sx={{color:'#50b7f5'}}/>
            <Typography variant="h4">See what's happening in the world right now</Typography>
            <FormControl sx={{p:5}}>
            <Link className="link" to="SignUpBoxInput"><Button variant="contained" sx={{ borderRadius: '25px',bgcolor:'#50b7f5', color:'white', width:'300px'}}>Sign Up</Button></Link><br/>
                <Link className="link" to="LoginBoxInput"><Button variant="outlined" sx={{ borderRadius: '25px', borderColor:'#50b7f5', color:'#50b7f5', width:'300px'}}>Login</Button></Link>
            </FormControl>
        </div>
        </>
    );
}