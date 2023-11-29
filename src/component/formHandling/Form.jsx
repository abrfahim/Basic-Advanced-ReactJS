
const Form = () => {

    const formData=(e)=>{
        e.preventDefault();
        alert('I am working fine!')
    }
    return (
        <div>
            <form onSubmit={formData}>
                <input type="text" placeholder="name"/>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Form;