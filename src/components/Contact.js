import React from "react";
import { useStyles } from "react-styles-hook";

function Contact() {
    const styles = useStyles({
        contactContainer: {
            backgroundColor: "#16171E",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        contactContent: {
            // display: "flex",
            flexWrap: "wrap",
            // flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
        },
        contactStyle: {
            marginTop: 50,
            marginBottom: "3rem",
            flex: 1,
            fontSize: 20,
            color: "white",
        },
        contactStyleDefine: {
            marginBottom: "1rem",
            flex: 1,
            fontSize: 18,
            color: "white",
        },

        contactMeStyle: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            fontSize: 17,
            color: "#bdc3c7",
        },
        contactAlsoStyle: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            fontSize: 17,
            color: "#bdc3c7",
            textDecoration: "none",
        },
    });
    return (
        <div id="contact" style={styles.contactContainer}>
            <span style={styles.contactStyle}>Contact</span>
            <span style={styles.contactStyleDefine}>You can contact me at</span>
            <div style={styles.contactContent}>
                <div style={styles.contactMeStyle}>
                    Email: mohanavel.i@outlook.com
                </div>
                <div style={styles.contactMeStyle}>
                    Phone Number: +1 807 357 5238
                </div>
            </div>
            <span style={styles.contactStyleDefine}>
                You can also find me on
            </span>
            <div style={styles.contactContent}>
                <a
                    href="https://github.com/minbavel"
                    style={styles.contactAlsoStyle}
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/mohanavel-inbavel-3008b9184"
                    style={styles.contactAlsoStyle}
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Contact;
