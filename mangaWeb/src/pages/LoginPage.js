import React, { useState} from 'react';

const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [PassWord, setPassword] = useState("");

    const submitLogin = async () => {
        //Null check
        if (!PassWord){
            console.log("Error");
            alert("Cannot be empty")
        }
        else if (!userName){
            console.log("Error");
            alert("Cannot be empty")
        }
        //Check length
        else if (userName.length <32 && userName.length > 8){
            console.log("Please keep username between 8-32 characters")
            alert("Please keep username between 8-32 characters")
        }
        //Check length
        else if (PassWord.length <32 && PassWord.length > 8){
            console.log("Please keep password between 8-32 characters")
            alert("Please keep password between 8-32 characters")
        }
        //Capital letters
        else if (/([A-Z]+)/g.test(PassWord)){
            console.log("Need at least one capital letter");
            alert("Need atleast 1 large character");
        }
        else {
            event.preventDefault();
        console.log("Submitted");
        const result = await fetch(`/api/Login/${PassWord}/${userName}`, {
            method: 'POST'
        })
        .then((res) => res.json())
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false);
        })
        }
    }

   /* const submitLogin = async () => {
        event.preventDefault();
        console.log("Submitted");
        const result = await fetch(`/api/Login/${PassWord}/${userName}`, {
            method: 'POST'
        })
        .then((res) => res.json())
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false);
        })
    } */
    

    return (
        <div className = "loginForm">
            <input 
            type = "text"
            name = "UserName"
            onChange = {(event) => setUserName(event.target.value)}
            placeholder = "username"
            value = {UsernameInput}
            className = "UsernameInput"
            />
            <input 
            type = "text"
            name = "PassWord"
            onChange = {(event) => setPassword(event.target.value)}
            placeholder = "PassWord"
            value = {PassWordInput}
            className = "UsernameInput"
            />
            <button 
            onClick = {() => submitLogin()}>
                Login
            </button>
        </div>


        
    );



}

export default LoginPage