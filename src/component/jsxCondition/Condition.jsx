
const Condition = () => {
    const status = false

    if (status==true) {
        return (
            <div>
                <p>You are logged in!</p>
                <button>Logout</button>
            </div>
        );
    }else{
        return (
            <div>
                <p>You are not logged in!</p>
                <p>Sign up or Login to Continue!</p>
                <br />
                <input type="text" /> <br />
                <input type="password" /> <br />
                <button>Login</button>
            </div>
        );
    }
}
export default Condition;