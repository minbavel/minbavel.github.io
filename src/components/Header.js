import React from "react";
import { useStyles } from "react-styles-hook";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
    const styles = useStyles({
        buttonContainer: {
            display: "flex",
            justifyContent: "center",
            height: 100,
            alignItems: "center",
        },
        button: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            backgroundColor: "transparent",
            fontSize: "20px",
            border: "none",
            color: "white",
            textDecoration: "none",
        },
    });
    return (
        <div style={styles.buttonContainer}>
            <AnchorLink href="#about" style={styles.button}>
                About
            </AnchorLink>
            <AnchorLink href="#project" style={styles.button}>
                Projects
            </AnchorLink>
            <AnchorLink href="#contact" style={styles.button}>
                Contact
            </AnchorLink>
        </div>
    );
}

export default Header;
