import React from "react";
import { useStyles } from "react-styles-hook";

function Hero() {
    const styles = useStyles({
        heroContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: 500,
            alignItems: "center",
        },
        name: {
            fontSize: 50,
            color: "black",
        },
        subheading: {
            fontSize: 30,
            color: "black",
        },
    });
    return (
        <div style={styles.heroContainer}>
            <span style={styles.name}>Hi! I Am Mohanavel</span>
            <span style={styles.subheading}>
                I am a Software Developer interested in Machine Learning, Data
                Science and Web Design.
            </span>
        </div>
    );
}

export default Hero;
