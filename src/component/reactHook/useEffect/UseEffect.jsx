import React, { useEffect, useState } from 'react';

// API CALLING - PROMISES STYLE

const UseEffect = () => {

    let [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res=> res.json())
        .then(json=> setData(json))
    }, [])



    return (
        <div>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
};

export default UseEffect;