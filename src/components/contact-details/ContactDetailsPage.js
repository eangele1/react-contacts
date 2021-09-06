import { useContext } from 'react';
import ContactDetailsCard from "./ContactDetailsCard";
import { ContactContext } from '../../context/ContactContext.js';
import NavBar from '../NavBar.js';
import back from "../../back.png";

import { useParams } from 'react-router-dom';
import { useHistory } from "react-router-dom";

let contentWrapper = {
    display: "flex",
    justifyContent: "center",
};

const ContactDetailsPage = () => {

    const { index } = useParams();
    const { contacts } = useContext(ContactContext);
    const history = useHistory();

    let result = contacts.find(obj => {
        return obj.id === parseInt(index);
    });

    return (
        <>
            <NavBar>
                <img
                    style={{ cursor: "pointer", position: "absolute", left: "15px", top: "20px" }}
                    src={back}
                    alt="logout"
                    width="35rem"
                    onClick={() => history.goBack()}
                />
            </NavBar>
            <div style={contentWrapper}>
                <ContactDetailsCard contact={result} />
            </div>
        </>
    )
}

export default ContactDetailsPage;