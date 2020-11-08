import React from "react";
import { useStyles } from "react-styles-hook";
import project1 from "./images/project1.JPG";
import project2 from "./images/project2.JPG";
import project3 from "./images/project3.JPG";

function Projects() {
    const styles = useStyles({
        projectContainer: {
            backgroundColor: "#16171E",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        projectTitleContainer: {
            display: "flex",
            alignItems: "center",
            height: 150,
        },
        projectTitle: {
            fontSize: 30,
            color: "white",
        },

        imageAndProjectContainer: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: "70%",
            height: 220,

            alignItems: "center",
        },
        projectContent: {
            //marginRight: 20,
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            height: 200,
            backgroundColor: "tomato",
        },
        image: {
            height: 200,
            width: 200,
        },
        projectFontHeading: {
            fontSize: 20,
            color: "white",
            marginBottom: 10,
        },
        projectFont: {
            fontSize: 14,
            color: "white",
        },
    });
    return (
        <div id="project" style={styles.projectContainer}>
            <div style={styles.projectTitleContainer}>
                <span style={styles.projectTitle}>Project</span>
            </div>
            <div style={styles.imageAndProjectContainer}>
                <img style={styles.image} alt="img1" src={project1} />
                <div style={styles.projectContent}>
                    <span style={styles.projectFontHeading}>
                        Recomputation of the Dense Layers for Performance
                        Improvement of DCNN
                    </span>
                    <span style={styles.projectFont}>
                        Using VGG16 Architecture for Performance Improvement in
                        CIFAR100 Dataset. The proposed method uses Moore-Penrose
                        Inverse to extract the current residual error to each FC
                        layer, which helps in generating well-generalized
                        features. Further, the weights of each FC layers are
                        recomputed according to the Moore-Penrose Inverse
                    </span>
                </div>
            </div>
            <div style={styles.imageAndProjectContainer}>
                <img style={styles.image} alt="img2" src={project2} />
                <span style={styles.projectFont}>
                    AI Animal Identification System usingn CLIPS
                </span>
            </div>
            <div style={styles.imageAndProjectContainer}>
                <img style={styles.image} alt="img1" src={project3} />
                <span style={styles.projectFont}>
                    This Project 3 is about Bla Bla Bla
                </span>
            </div>
        </div>
    );
}

export default Projects;
