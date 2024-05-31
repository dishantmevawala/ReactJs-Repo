import React from "react";
import logo from "./logo.svg";

var Header = (props)=> {
    return( 
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Header Page</h2>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
        </>
        
    )
}

export default Header;