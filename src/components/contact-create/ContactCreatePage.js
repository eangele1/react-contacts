import ContactCreateForm from "./ContactCreateForm";

let contentWrapper = {
    width: "90vw",
    maxWidth: "600px",
    margin: "auto"
};

const ContactCreatePage = () => {
    return (
        <div style={contentWrapper}>
            <ContactCreateForm />
        </div>
    )
}

export default ContactCreatePage;