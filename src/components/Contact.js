import React from "react";
import { useStyles } from "react-styles-hook";

function Contact() {
    const styles = useStyles({
        contactContainer: {
            backgroundColor: "#16171E",
            height: 100,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        contactContent: {
            display: "flex",
            flexWrap: "wrap",
            width: "80%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        contactStyle: {
            flex: 1,
            fontSize: 20,
            color: "white",
        },

        emailStyle: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            fontSize: 20,
            color: "white",
        },
        phoneStyle: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            fontSize: 20,
            color: "white",
        },
    });
    return (
        <div id="contact" style={styles.contactContainer}>
            <span style={styles.contactStyle}>Contact</span>
            <div style={styles.contactContent}>
                <div style={styles.emailStyle}>
                    Email: mohanavel.i@outlook.com
                </div>
                <div style={styles.phoneStyle}>
                    Phone Number: +1 807 357 5238
                </div>
            </div>
        </div>
    );
}

export default Contact;
