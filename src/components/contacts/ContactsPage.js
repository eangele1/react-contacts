import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { useHistory } from "react-router-dom";

import ContactsList from "./ContactsList";
import logout from "../../logout.png";
import NavBar from '../NavBar.js';
import Add from "../../add.png"

const ContactsPage = () => {

    const { dispatchUserEvent } = useContext(AuthContext);

    const history = useHistory();

    const handleLogOut = () => {
        dispatchUserEvent('LOGOUT', null);
    }

    return (
        <>
            <NavBar>
            <img
                    style={{ cursor: "pointer", position: "absolute", left: "15px", top: "20px" }}
                    src={Add}
                    alt="logout"
                    width="50rem"
                    onClick={() => history.push("/contacts/add")}
                />
                <img
                    style={{ cursor: "pointer", position: "absolute", right: "15px", top: "20px" }}
                    src={logout}
                    alt="logout"
                    width="50rem"
                    onClick={() => handleLogOut()}
                />
            </NavBar>
            <ContactsList />
        </>
    );
}

export default ContactsPage;