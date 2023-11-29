import React, { useRef } from 'react';


const UseRef6 = () => {

    let apidata = useRef(null)
    let showdata = useRef()

    const api= async()=>{
        let response = await fetch('https://dummyjson.com/products/1')
        apidata.current = await response.json();

    }

    const data=()=>{
        showdata.current.innerText = JSON.stringify(apidata.current)
    }

    return (
        <div>
            <p ref={showdata}></p>
            <button onClick={api}>Call API</button>
            <button onClick={data}>Show Data</button>
        </div>
    );
};

export default UseRef6;