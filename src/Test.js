import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
// import Test1 from "./Test1";

const Test = (props)=> {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        const myData = async ()=> {
            setLoading(true);
            await axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res=>{
                setData(res.data);
                setLoading(false);
            }).catch(err=>{
                setLoading(false);
                return false;
            })
        }
        myData();

    }, []);
    
    const changeCount = ()=> {
        console.log('chrck memo');
        return count * 5;
    }
    
    const countMemo = useMemo(()=>changeCount(), [count])
    const countCallback = useCallback(()=>{
       console.log('callback');
       setCount1(count1 + 10);
    },[count1])
    
    return (
        <>
            {loading && (
                <h4>Loading......</h4>
            )}
            {(loading === false) && (
                <>
                    <p>{props.name} {props.children}</p>
                    <p>Memo {countMemo}</p>
                    <p>Callback {countCallback}</p>
                    <button onClick={()=>setCount(count + 1)}>Count</button>
                    <button onClick={()=>setCount1(count1 + 1)}>Count1 {count1}</button>
                    {data.map((item, index) => {
                        <p key={index}>User Id: {item.userId} id: {item.id} title: {item.title} completed: {item.completed}</p>
                    })}
                </>
            )}
            {/* <Test1 setCount={setCount} count={count} /> */}
        </>
        // <>
        //     {loading ? ( 
        //             <h4>Loading...</h4> 
        //         ) : ( 
        //             data.map((item, index) => ( 
        //                 // Presently we only fetch 
        //                 // title from the API 
        //                 <p key={index}>User Id: {item.userId} id: {item.id} title: {item.title} completed: {item.completed}</p> 
        //             )) 
        //         )} 
        // </>
    );
}

export default Test;