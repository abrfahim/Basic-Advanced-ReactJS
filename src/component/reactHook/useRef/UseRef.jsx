import { useRef } from "react";

const UseRef = () => {

    const newobj = useRef();
    const obj2 = useRef()


    const btnClick =() => {
        newobj.current.innerText = 'Dom Manipulated by useRef hook';
    }

    const btn2=()=>{
        obj2.current.innerHTML= "<ul><li>A</li><li>B</li><li>C</li></ul>"
    }

    return (
        <div>
            <h1 ref={newobj}>Hello World</h1>
            <button onClick={btnClick}>view_Change</button>
            <h2 ref={obj2}>List View</h2>
            <button onClick={btn2}>Change</button>
        </div>
    );
};

export default UseRef;