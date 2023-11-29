const Switch = () => {
    const status = null

            
    switch (status) {
        case true:
            return <button>Logout</button>
        case false:
            return <button>Login</button>
        default:
            return <p>You are not a legit user!</p>

    }
            

};

export default Switch;