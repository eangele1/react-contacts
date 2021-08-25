import ContactCard from "./ContactCard"

let listWrapper = {
    textAlign: "center",
    margin: "auto",
    width: "450px",
    backgroundColor: "darkgray"
};

const ContactList = ({ contacts=[] }) => {
    return (
        <div style={listWrapper}>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
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