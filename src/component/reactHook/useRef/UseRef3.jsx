import React, { useRef } from 'react';

const UseRef3 = () => {

    let fName, lName = useRef();

    const changer =()=>{
       let fn = fName.value;
       let ln = lName.value;

       alert(fn + " " + ln)
    }

    return (
        <div>
            <input ref={(x)=>fName=x}  placeholder='First Name' /> <br />
            <input ref={(x)=>lName=x} placeholder='Last Name' /> <br />
            <button onClick={changer}>Submit</button>
        </div>
    );
};

export default UseRef3;