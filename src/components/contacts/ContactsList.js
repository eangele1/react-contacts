import { useContext } from 'react';
import ContactCard from "./ContactCard";
import { ContactContext } from '../../context/ContactContext.js';

let listWrapper = {
    textAlign: "center",
    margin: "auto",
    maxWidth: "600px",
    width: "75vw",
    backgroundColor: "darkgray"
};

const ContactList = () => {

    const { contacts } = useContext(ContactContext);

    return (
        <div style={listWrapper}>
            {contacts.map((contact) =>
                <ContactCard
                    key={contact.id}
                    ID={contact.id}
                    firstName={contact.firstName}
                    lastName={contact.lastName}
                    phoneNumber={contact.phoneNumber}
                    profilePic={contact.profilePic}
                />
            )}
        </div>
    )
}

export default ContactList;