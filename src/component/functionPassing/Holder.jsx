

const Holder = (props) => {
    return (
        <div>
            <button onClick={props.btnclc}>Click</button> <br /> <br />
            <button onClick={props.sbtn}>press</button> <br /> <br />
            <button onClick={props.nextbtn}>play</button>
        </div>
    );
};

export default Holder;