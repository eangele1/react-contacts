import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from "../../utils/auth";

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
    color: "black",
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

let disabledButtonStyle = {
    ...buttonStyle,
    color: "white",
    cursor: "auto"
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

const RegisterForm = () => {

    const [username, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "username":
                setUserName(e.target.value)
                break;
            case "password":
                setPassWord(e.target.value);
                break;
            case "confirmPass":
                setConfirmPass(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = (e) => {
        console.log("Hi");
        createUser(username, password);
        e.preventDefault();
    };

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
                <input
                    style={inputStyle}
                    id="confirmPass"
                    name="confirmPass"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChange={(e) => handleInputChange(e)}
                />
            </div>
            <div>
                <button
                    disabled={!(username !== "" && confirmPass === password)}
                    style={((username !== "" && confirmPass === password) ? buttonStyle : disabledButtonStyle)}
                    type="submit"
                >
                    REGISTER
                </button>
            </div>
            <div>
                <p>Already have an account? <Link to="/login">Login</Link>.</p>
            </div>
        </form>
    );
}

export default RegisterForm;