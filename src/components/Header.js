import { findByLabelText } from "@testing-library/react";
import React from "react";
import { useStyles } from "react-styles-hook";

function Header() {
    const styles = useStyles({
        buttonContainer: {
            display: "flex",
            justifyContent: "center",
            height: 100,
            alignItems: "center",
        },
        button: {
            flex: 1,
            backgroundColor: "transparent",
            // marginRight:60,
            // marginLeft:60,
            fontSize: 25,
            border: "none",
        },
    });
    return (
        <div style={styles.buttonContainer}>
            <button style={styles.button}>About</button>
            <button style={styles.button}>Projects</button>
            <button style={styles.button}>Contact</button>
        </div>
    );
}

export default Header;
