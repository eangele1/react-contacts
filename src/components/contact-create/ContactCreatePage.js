import ContactCreateForm from "./ContactCreateForm";
import NavBar from '../NavBar.js';
import back from "../../back.png";
import { useHistory } from "react-router-dom";

let contentWrapper = {
    width: "75vw",
    maxWidth: "600px",
    margin: "auto"
};

const ContactCreatePage = () => {

    const history = useHistory();

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
                <ContactCreateForm />
            </div>
        </>
    )
}

export default ContactCreatePage;