import React from "react";

export function ValidateLogin(event){
    console.log(event);
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("username"));
    console.log(data.get("password"));
}