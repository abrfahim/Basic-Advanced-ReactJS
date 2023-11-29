import { useRef } from "react";

const UseRef2 = () => {

    const myImg = useRef()
    
    
    const changer=()=>{
        myImg.current.src = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        myImg.current.setAttribute('height','600px')
        myImg.current.setAttribute('width','600px')
    }

    return (
        <div>
            <img ref={myImg} src="https://placehold.co/600x400/EEE/31343C" height={500} width={500}/> <br />
            <button onClick={changer}>Change</button>
        </div>
    );
};

export default UseRef2;