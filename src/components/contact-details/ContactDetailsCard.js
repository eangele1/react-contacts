let contentWrapper = {
    backgroundColor: "white",
    width: "75vw",
    maxWidth: "600px",
    padding: "40px",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
};

let listItemStyle = {
    fontSize: "20px",
    padding: "10px"
};

const ContactDetailsCard = ({ contact }) => {
    return (
        <div style={contentWrapper}>
            <div style={{ textAlign: "center" }}>
                <img style={{ borderRadius: "50%", width: "150px", padding: "5px" }} src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div >
                <p style={{ margin: "25px 0px", textAlign: "center", fontSize: "25px" }}>{contact?.firstName} {contact?.lastName}</p>
                <dl style={{ display: "table", margin: "0 auto" }}>
                    <dt style={{ fontWeight: "bold" }}>Phone Number</dt>
                    <dd style={listItemStyle}>{contact?.phoneNumber}</dd>

                    <dt style={{ fontWeight: "bold" }}>Email</dt>
                    <dd style={listItemStyle}>{contact?.email}</dd>

                    <dt style={ {fontWeight: "bold"} }>Address</dt>
                    <dd style={listItemStyle}>{contact?.address}</dd>
                </dl>
            </div>
        </div>
    )
}

export default ContactDetailsCard;