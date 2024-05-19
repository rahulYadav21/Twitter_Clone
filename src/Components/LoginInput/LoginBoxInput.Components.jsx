import { FormControl, TextField, Button } from "@mui/material";
import React from "react";
import './LoginBoxInput.Components.css';
import { useState } from "react";
import { ValidateLogin } from "./LoginUtility.Components";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export default function LoginBoxInput(){

    const [email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    const navigate  = useNavigate();

    const [loggedIn, setLoggedIn] = useState(false);

    function stateChange(){
        signInWithEmailAndPassword(auth,email,Password).then((res)=>{
            console.log(res);
            navigate("/Home");
        }).catch((err)=>{
            console.log(err);
            alert(err.code);
        })
    }

    return (
        <>
            <div>
                <FormControl onSubmit={ValidateLogin}>
                    <TextField type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="username" size="small" id="outlined-basic" label="Username/Email" variant="outlined"/><br/>
                    <TextField type="password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} name="password" size="small" id="outlined-basic" label="Password" variant="outlined"/><br/>
                    <Button variant="contained" sx={{ borderRadius: '25px', bgcolor:'#50b7f5', color:'white' }}
                    onClick={stateChange}>Login</Button>
                </FormControl>
            </div>
        </>
    );
}