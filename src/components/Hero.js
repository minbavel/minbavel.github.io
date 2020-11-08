import React from "react";
import { useStyles } from "react-styles-hook";

function Hero() {
    const styles = useStyles({
        heroContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 600,
            alignItems: "center",
        },
        name: {
            fontSize: 50,
            color: "white",
        },
        subheading: {
            fontSize: "23px",
            color: "white",
            textAlign: "justify",
            paddingLeft: 10,
            paddingRight: 10,
        },
    });
    return (
        <div id="about" style={styles.heroContainer}>
            <span style={styles.name}>Hi! I am Mohanavel</span>
            <p style={styles.subheading}>
                I am a Software Developer interested in Machine Learning, Data
                Science and Web Design.
            </p>
        </div>
    );
}

export default Hero;
