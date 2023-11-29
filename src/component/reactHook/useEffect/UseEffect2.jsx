import React, {useEffect} from 'react';

// API calling - Async Process
const UseEffect2 = () => {

    let [data, setData] = useState([])

    useEffect(()=>{
        (async()=>{
        let response = await fetch('https://dummyjson.com/products/1');
        let result = await response.json();
        setData(result);

        })()

    }, [])
    return (
        <div>
            <div>
                {JSON.stringify(data)}
            </div>
        </div>
    );
};

export default UseEffect2;