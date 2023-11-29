import React, { useState } from 'react';

const UseState3 = () => {

    const [list, setList] = useState([]);   
    const [item, setItem] = useState("");

    const addToList=()=>{
        list.push(item)
        setList([...list]);
    }

    const removeItem=(id)=>{
        list.splice(id, 1);
        setList([...list]);
    }

    return (
        <div>
            
            <div className='container'>
                <input onChange={(e)=>setItem(e.target.value)} placeholder='item' />
                <button onClick={addToList}>Add</button>
            </div>

            <div className='container'>
                <ul>
                    <li>
                        {
                            list.length!==0?(
                                list.map((element, id)=>{
                                    return <li>{element}    <button onClick={()=>{
                                        removeItem(id)
                                    }}>Reomove</button></li> 
                                })
                            ):(<li> No Object Found </li>)
                        }
                    </li>
                </ul>
            </div>


            
        </div>
    );
};

export default UseState3;