import Holder from "./Holder";

const Sender = () => {
    const BtnClick =()=>{
        alert('I am from sender');
    }

    var Btn2=()=>{
        alert('You are just a small learner');
    }

    let Btn3 =()=>{
        alert('I am a restless function');
    }

    return (
        <div>
            <Holder btnclc={BtnClick} sbtn={Btn2} nextbtn={Btn3} />
        </div>
    );
};

export default Sender;