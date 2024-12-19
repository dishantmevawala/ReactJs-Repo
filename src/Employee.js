import React from "react";

var Employee = (props)=> {
    return (
        <>
            <h1>Employee Page</h1>
            <p>{ props.name + ' ' + props.surname }</p>
            <button onClick={clickMe(props)}>Click Here</button>
        </>
    );
}

var clickMe = (data)=> {
    alert('Hello')
    // alert(data.name)
    // alert(data.surname)
}

export default Employee;