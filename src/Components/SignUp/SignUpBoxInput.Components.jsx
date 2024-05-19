import { FormControl, TextField, Button } from "@mui/material";
import React from "react";
import './SignUpBoxInput.Components.css';
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
// import { useRef } from "react";
import { auth } from "../Firebase/Firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpBoxInput(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [img,setImg] = useState("");

    const navigate = useNavigate();

    function stateChange(){
        
        localStorage.setItem(email,img);
        createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
            const userdata = res.user;
            await updateProfile(userdata, {
                displayName: name
            });
            console.log(res);
            alert("Account created... "+email+" "+password);
            navigate("/LoginBoxInput");
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <>
            <div>
                <FormControl>
                    <TextField value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" size="small" id="outlined-basic" label="Username/Email" variant="outlined"/><br/>
                    <TextField type="text" value={name} onChange={(e)=>{setName(e.target.value)}} size="small" id="outlined-basic" label="Full Name" variant="outlined"/><br/>
                    <TextField type="text" value={img} onChange={(e)=>{setImg(e.target.value)}} size="small" id="outlined-basic" label="User Profile Image" variant="outlined"/><br/>
                    <TextField type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} size="small" id="outlined-basic" label="Create Password" variant="outlined"/><br/>
                    <Button onClick={stateChange} variant="contained" sx={{ borderRadius: '25px',bgcolor:'#50b7f5', color:'white'}}>Sign Up</Button>
                </FormControl>
            </div>
        </>
    );
}