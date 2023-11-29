import React, { useState } from 'react';

const UseState2 = () => {

    let [myObj, setMyObj] = useState({
        name: 'Abrar Fahim',
        city: 'Dhaka',
        profession: 'Software Developer',
        skill: 'Python & Javascript'
    })

    let change=()=>{
        setMyObj(
            prevObj=>({
                ...prevObj,
                name:'Sonet Chowdhury',
                skill: 'Digital Marketing',
            })
        )
    }

    return (
        <div>
            <ul>
                <li><p>{myObj.name}</p>
            <p>{myObj.city}</p>
            <p>{myObj.profession}</p>
            <p>{myObj.skill}</p></li>
            </ul>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default UseState2;