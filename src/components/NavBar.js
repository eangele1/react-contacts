import logo from "../logo.png";

let NavStyle = {
    height: "6rem",
    backgroundColor: "black",
    display: "flex"
};

const NavBar = (props) => {

    return(
        <div style={NavStyle} role="banner">
            <img style={{ display: "block", margin: "auto" }} src={logo} alt="logo" width="75rem" />
            {props.children}
        </div>
    );
}

export default NavBar;