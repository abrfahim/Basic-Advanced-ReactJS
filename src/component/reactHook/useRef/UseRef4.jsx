import { useRef } from "react";

const UseRef4 = () => {
    let myHeadLine = useRef()

    let change=()=>{
        myHeadLine.current.className = 'text-success'
    }

    return (
        <div>
            <h1 ref={myHeadLine} className="text-info">I am just a text</h1>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default UseRef4;