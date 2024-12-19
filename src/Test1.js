import React from "react";

const Test1 = (props)=> {
    return (
        <>
            <button onClick={props.setCount(props.count + 1)}>Change</button>
        </>
    );
}

export default Test1;