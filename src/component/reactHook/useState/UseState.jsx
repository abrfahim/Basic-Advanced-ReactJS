import React, { useState } from 'react';

const UseState = () => {

    const [number, setNumber] = useState(0);
    const [math, setMath] = useState(0);

    let solve=()=>{
        setMath(math+2);
    }
    return (
        <div>
            <h1>Number: {number} </h1>
            <button onClick={solve}>Show Math</button>
            <h1>Math: {math}</h1>
            <button onClick={()=>setNumber(number+5)}>Click</button>
        </div>
    );
};

export default UseState;