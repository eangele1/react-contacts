import { useContext } from "react";
import { ContactContext } from '../../context/ContactContext.js';
import { deleteContact } from "../../utils/contacts";
import { useHistory } from "react-router-dom";

import "./ContactCard.css";

let cardContainer = {
    float: "left",
    margin: "20px 0px",
    width: "100%",
    backgroundColor: "white",
    boxShadow: "0 5px 5px -4px rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
};

let contentWrapper = { 
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
};

let buttonStyle = {
    cursor: "pointer",
    margin: "0px 10px",
    padding: "2px 7px",
    fontSize: "18px",
    borderRadius: "100%",
    fontWeight: "bold",
    color: "white",
    borderStyle: "none",
    backgroundColor: "darkgray"
};

const ContactCard = ({ ID='', firstName='', lastName='', phoneNumber='', profilePic='' }) => {

    const handleRemoveContact = () => {
        deleteContact(ID);
		dispatchContactEvent('REMOVE_CONTACT', { contactID: ID });
	};

    const { dispatchContactEvent } = useContext(ContactContext);

    const history = useHistory();

    return (
        <div style={cardContainer}>
            <div onClick={() => history.push(`/contacts/${ID}`)} style={contentWrapper}>
                <div>
                    <img style={{ borderRadius: "50%", width: "100px", padding: "10px" }} src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                </div>
                <div className="vl"></div>
                <div style={{ padding: "0px 10px", fontFamily: "Helvetica", color: "#404040" }}>
                    <p>{firstName} {lastName}</p>
                    <p>{phoneNumber}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handleRemoveContact()} style={buttonStyle}>✘</button>
            </div>
        </div>
    )
}

export default ContactCard;