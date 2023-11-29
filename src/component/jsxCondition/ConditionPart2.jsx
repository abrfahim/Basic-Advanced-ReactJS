const LoginStatusBtn=(status)=>{
    if(status==true){
        return <button>Logout</button>
    }
    else{
        return <button>Login</button>
    }
}



const ConditionPart2 = () => {
    return (
        <div>
            <p>Log Status true==logout : false=login</p>
            {LoginStatusBtn(true)}
        </div>
    );
};

export default ConditionPart2;