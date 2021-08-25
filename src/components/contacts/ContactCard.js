import "./ContactCard.css";

let cardContainer = {
    float: "left",
    margin: "20px 0px",
    width: "450px",
    backgroundColor: "white",
    boxShadow: "0 5px 5px -4px rgba(0, 0, 0, 0.7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
};

let contentWrapper = { 
    display: "flex",
    alignItems: "center"
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

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {

    return (
        <div style={cardContainer}>
            <div style={contentWrapper}>
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
                <button style={buttonStyle}>✘</button>
            </div>
        </div>
    )
}

export default ContactCard;