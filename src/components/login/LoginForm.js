import React, { useState } from 'react';

let formStyle = {
    width: "75vw",
    maxWidth: '600px',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#FFF',
    padding: '30px 40px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: "center",
    boxShadow: "0 5px 10px -4px rgba(0, 0, 0, 0.7)",
};

let buttonStyle = {
    backgroundColor: "darkgray",
    border: "none",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
};

let inputStyle = {
    width: "60%",
    padding: "12px 12px",
    margin: "8px 0px",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px solid black",
    fontSize: "18px",
    color: "black",
    backgroundColor: "rgba(201, 76, 76, 0)"
};

const LoginForm = () => {

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "username":
                setUserName(e.target.value)
                break;
            case "password":
                setPassWord(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = (e) => e.preventDefault();

    return (
        <form style={formStyle} onSubmit={(e) => handleFormSubmit(e)}>
            <div>
                <input
                    style={inputStyle}
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div>
                <input
                    style={inputStyle}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div>
                <button style={buttonStyle} type="submit">LOGIN</button>
            </div>
            <div>
                <p>Don't have an account? <a href="/register">Register</a>.</p>
            </div>
        </form>
    );
}

export default LoginForm;