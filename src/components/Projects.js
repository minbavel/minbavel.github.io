import React from "react";
import { useStyles } from "react-styles-hook";
import project1 from "./images/project1.png";
import project2 from "./images/project2.JPG";
import project3 from "./images/project3.JPG";
import { Row, Col, Container } from "react-bootstrap";

function Projecttest() {
    const styles = useStyles({
        projectContainer: {
            backgroundColor: "#17181F",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        projectTitleContainer: {
            height: 100,
        },
        projectTitle: {
            fontSize: 30,
            color: "white",
        },

        imageAndProjectContainer: {
            display: "flex",
            marginBottom: "2rem",
        },
        imageContainer: {
            display: "flex",
            justifyContent: "Center",
        },
        image: {
            // marginRight: "10rem",
            borderRadius: 20,
            height: 180,
            width: 180,
        },
        projectFontHeading: {
            fontSize: 23,
            color: "#bdc3c7",
            marginBottom: 10,
            textDecoration: "none",
        },
        projectFont: {
            fontSize: 19,
            color: "white",
        },
    });
    return (
        <div id="project" style={styles.projectContainer}>
            <div style={styles.projectTitleContainer}>
                <span style={styles.projectTitle}>Project</span>
            </div>
            {/* PROJECT 1 */}
            <Container fluid>
                <Row
                    style={styles.imageAndProjectContainer}
                    className="d-flex flex-wrap"
                >
                    <Col
                        style={styles.imageContainer}
                        xl={3}
                        lg={3}
                        md={5}
                        sm={12}
                        xs={12}
                    >
                        <a href="https://github.com/minbavel/VGG_CIFAR100">
                            <img
                                style={styles.image}
                                src={project1}
                                alt="image1"
                            />
                        </a>
                    </Col>
                    <Col xl={9} lg={9} md={7} sm={12} xs={12}>
                        <a
                            style={styles.projectFontHeading}
                            href="https://github.com/minbavel/VGG_CIFAR100"
                        >
                            {" "}
                            Recomputation of the Dense Layers for Performance
                            Improvement of DCNN
                        </a>

                        <p style={styles.projectFont}>
                            Using VGG16 Architecture for Performance Improvement
                            in CIFAR100 Dataset. The proposed method uses
                            Moore-Penrose Inverse to extract the current
                            residual error to each FC layer, which helps in
                            generating well-generalized features. Further, the
                            weights of each FC layers are recomputed according
                            to the Moore-Penrose Inverse
                        </p>
                    </Col>
                </Row>

                {/* PROJECT 2 */}
                <Row
                    style={styles.imageAndProjectContainer}
                    className="d-flex flex-wrap"
                >
                    <Col
                        style={styles.imageContainer}
                        xl={3}
                        lg={3}
                        md={5}
                        sm={12}
                        xs={12}
                    >
                        <a href="https://github.com/minbavel/AI-Animal-Identification-System-using-CLIPS">
                            <img
                                style={styles.image}
                                src={project2}
                                alt="image2"
                            />
                        </a>
                    </Col>
                    <Col xl={9} lg={9} md={7} sm={12} xs={12}>
                        <a
                            style={styles.projectFontHeading}
                            href="https://github.com/minbavel/AI-Animal-Identification-System-using-CLIPS"
                        >
                            AI Animal Identification System usingn CLIPS
                        </a>
                        <p style={styles.projectFont}>
                            The rules of the system were designed to illustrate
                            how to represent various types of knowledge, rather
                            than to provide accurate identification. Depending
                            on the answer the system will guess what Animal you
                            were thinking in mind.
                        </p>
                    </Col>
                </Row>

                <Row
                    style={styles.imageAndProjectContainer}
                    className="d-flex flex-wrap"
                >
                    <Col
                        style={styles.imageContainer}
                        xl={3}
                        lg={3}
                        md={5}
                        sm={12}
                        xs={12}
                    >
                        <a href="https://github.com/minbavel/Machine-Learning-in-R-using-Decision-Tree">
                            <img
                                style={styles.image}
                                src={project3}
                                alt="image3"
                            />
                        </a>
                    </Col>
                    <Col xl={9} lg={9} md={7} sm={12} xs={12}>
                        <a
                            href="https://github.com/minbavel/Machine-Learning-in-R-using-Decision-Tree"
                            style={styles.projectFontHeading}
                        >
                            Machine Learning in R using Decision Tree
                        </a>
                        <p style={styles.projectFont}>
                            To use the weather data (provided by R) and
                            construct a decision tree using the tree package to
                            predict if it will rain tomorrow based on the
                            today’s degree of sunshine and the degree of the
                            cloud availability at 3pm
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Projecttest;
