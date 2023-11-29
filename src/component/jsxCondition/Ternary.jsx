
const Ternary = () => {
    let age = 25;
    const marks = 80;
    return (
        <div>
            {marks>79?<h1>Pass</h1>:<h1>Failed</h1>}
            {(
                ()=>{
                if(age<31 && age>20){
                return <h1>Man</h1>
                }else{
                return <h1>Old Boy</h1>
                }
            }
            )()}
        </div>
    );
};

export default Ternary;