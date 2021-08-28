import ContactDetailsCard from "./ContactDetailsCard";

let contentWrapper = {
    display: "flex",
    justifyContent: "center",
};

const ContactDetailsPage = ({ contact }) => {
    return (
        <div style={contentWrapper}>
            <ContactDetailsCard contact={contact} />
        </div>
    )
}

export default ContactDetailsPage;