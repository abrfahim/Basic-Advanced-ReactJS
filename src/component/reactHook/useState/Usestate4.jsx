import React, { useState } from 'react';

const Usestate4 = () => {

    let [formObj, setFormObj] = useState({
        fname: "",
        lname: "",
        city : "",
        gender : "",
    })

    const inputHandler=(props, value)=>{
        setFormObj(prevObj=>({
            ...prevObj,
            [props]: value
        }))
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(JSON.stringify(formObj))
    }

    return (
        <div>
            

            <div className='container'>
                <form onSubmit={formSubmit}>
                    <br />
                    <input onChange={(e)=>{inputHandler('fname', e.target.value)}} value={formObj.fname} type="text" placeholder='First Name' /> <br />

                    <input onChange={(e)=>{inputHandler('lname', e.target.value)}} value={formObj.lname} type="text"  placeholder='Last Name'/> <br />

                    <select onChange={(e)=>{inputHandler('city', e.target.value)}} value={formObj.city} >
                        <option value="">Choose City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option> 
                    </select> <br />

                    <input onChange={()=>{inputHandler('gender', 'Male')}} checked={formObj.gender=='Male'} type="radio" name='gender' /> Male

                    <input onChange={()=>{inputHandler('gender', 'Female')}} checked={formObj.gender=='Female'} type="radio" gender /> Female
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>

        </div>
    );
};

export default Usestate4;