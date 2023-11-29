
const Invoked = () => {
    const status = true
    return (
        <div>
            {(()=>{

                if(status==true){
                    return <button>Logout</button>
                }else{
                    return <button>Login</button>
                }

            })()}
        </div>
    );
};

export default Invoked;