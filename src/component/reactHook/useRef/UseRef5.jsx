import React, { useRef } from 'react';

const UseRef5 = () => {

    let num = useRef(1);

    let change=()=>{
        num.current++;
        console.log(num.current)
    }

    return (
        <div>
            <button onClick={change}>increase</button>
        </div>
    );
};

export default UseRef5;