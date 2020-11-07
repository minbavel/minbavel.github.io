import React from "react";
import { useStyles } from "react-styles-hook";
import sample from "./images/sample.jpg";

function Projects() {
    const styles = useStyles({
        projectContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // height: 800,
            // width: "80%",
            alignItems: "center",
        },
        projectTitleContainer: {
            display: "flex",
            alignItems: "center",
            height: 150,
        },
        projectTitle: {
            fontSize: 30,
            color: "black",
        },

        imageAndProjectContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "70%",
            height: 220,

            alignItems: "center",
        },
        image: {
            height: 200,
            width: 200,
        },
        projectFont: {
            fontSize: 20,
        },
    });
    return (
        <div style={styles.projectContainer}>
            <div style={styles.projectTitleContainer}>
                <span style={styles.projectTitle}>Project</span>
            </div>
            <div style={styles.imageAndProjectContainer}>
                <img style={styles.image} alt="img1" src={sample} />
                <span style={styles.projectFont}>
                    This Project 1 is about Bla Bla Bla
                </span>
            </div>
            <div style={styles.imageAndProjectContainer}>
                <img style={styles.image} alt="img2" src={sample} />
                <span style={styles.projectFont}>
                    This Project 2 is about Bla Bla Bla
                </span>
            </div>
            <div style={styles.imageAndProjectContainer}>
                <img style={styles.image} alt="img1" src={sample} />
                <span style={styles.projectFont}>
                    This Project 3 is about Bla Bla Bla
                </span>
            </div>
        </div>
    );
}

export default Projects;
