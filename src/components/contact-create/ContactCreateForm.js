import React, { useState, useContext } from "react";
import { ContactContext } from '../../context/ContactContext.js';
import { createContact } from "../../utils/contacts";
import samplePic from "../../sample-profile-pic.jpg";
import { useHistory } from "react-router-dom";

let inputStyle = {
    width: "100%",
    padding: "12px 12px",
    margin: "8px 0px",
    boxSizing: "border-box",
    border: "none",
    borderBottom: "1px solid black",
    fontSize: "18px",
    color: "black",
    backgroundColor: "rgba(201, 76, 76, 0)"
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

const ContactCreateForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [profilePic, setProfilePic] = useState("");

    const { dispatchContactEvent } = useContext(ContactContext);
    const history = useHistory();

    const handleAddContact = () => {

        const info = {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            profilePic
        };

		const contact = createContact(info);

		dispatchContactEvent('ADD_CONTACT', { newContact: contact });

        history.goBack();
	};

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "firstName":
                setFirstName(e.target.value);
                break;
            case "lastName":
                setLastName(e.target.value);
                break;
            case "phoneNumber":
                setPhoneNumber(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "address":
                setAddress(e.target.value);
                break;
            case "profilePic":
                setProfilePic(e.target.value);
                break;
            default:
                break;
        }
    }

    const handleFormSubmit = (e) => {
        handleAddContact();
        e.preventDefault();
    };

    return (
        <form style={{ width: "100%", float: "left", display: "flex", justifyContent: "center", }} onSubmit={(e) => handleFormSubmit(e)}>
            <div>
                <img style={{ borderRadius: "50%", width: "100px", padding: "15px" }} src={profilePic ? profilePic : samplePic} alt="Profile preview." />
            </div>
            <div style={{ width: "100%" }}>
                <div>
                    <input
                    style={inputStyle}
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <input
                    style={inputStyle}
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <input
                    style={inputStyle}
                        type="tel"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <input
                    style={inputStyle}
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <input
                    style={inputStyle}
                        type="text"
                        placeholder="Address"
                        name="address"
                        value={address}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <input
                    style={inputStyle}
                        type="text"
                        placeholder="Profile Picture Url"
                        name="profilePic"
                        value={profilePic}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <button style={buttonStyle} type="submit">ADD CONTACT</button>
                </div>
            </div>
        </form>
    );
}

export default ContactCreateForm;