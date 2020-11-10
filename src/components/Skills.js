import React from "react";
import { useStyles } from "react-styles-hook";
import { Row, Col, Container } from "react-bootstrap";

function Skills() {
    const styles = useStyles({
        skillsContainer: {
            backgroundColor: "#17181F",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        skillTitleContainer: {
            height: 100,
        },
        skill: {
            paddingBottom: 10,
        },
        skillTitle: {
            fontSize: 30,
            color: "white",
        },
        skillContentHeading: {
            display: "flex",
            flex: 2,
            justifyContent: "flex-end",
            fontSize: 22,
            color: "white",
        },
        skillContentContent: {
            display: "flex",
            flex: 3,
            fontSize: 22,
            color: "white",
        },
    });
    return (
        <div id="skills" style={styles.skillsContainer}>
            <div style={styles.skillTitleContainer}>
                <span style={styles.skillTitle}>Skills</span>
            </div>
            <Container fluid>
                {/* Skill 1 */}
                <Row style={styles.skill} className="d-flex flex-wrap">
                    <Col style={styles.skillContentHeading}>
                        Programming Languages:
                    </Col>
                    <Col style={styles.skillContentContent}>
                        Python, R, Java, C, C++, Clojure, CLIPS, JavaScript,
                        TypeScript
                    </Col>
                </Row>
                {/* Skill 2*/}
                <Row style={styles.skill} className="d-flex flex-wrap">
                    <Col style={styles.skillContentHeading}>
                        Machine Learning Tool:
                    </Col>
                    <Col style={styles.skillContentContent}>
                        TensorFlow , Keras , Pytorch , MATLAB
                    </Col>
                </Row>
                {/* Skill 3 */}
                <Row style={styles.skill} className="d-flex flex-wrap">
                    <Col style={styles.skillContentHeading}>
                        Front End Web Development:
                    </Col>
                    <Col style={styles.skillContentContent}>
                        React, Vue, Angular
                    </Col>
                </Row>
                {/* Skill 4 */}
                <Row style={styles.skill} className="d-flex flex-wrap">
                    <Col style={styles.skillContentHeading}>
                        Mobile Development:
                    </Col>
                    <Col style={styles.skillContentContent}>
                        React Native, Firebase
                    </Col>
                </Row>
                {/* Skill 5 */}
                <Row style={styles.skill} className="d-flex flex-wrap">
                    <Col style={styles.skillContentHeading}>
                        CI/CD & Automation:
                    </Col>
                    <Col style={styles.skillContentContent}>
                        Git (GitHub), Docker, Jira
                    </Col>
                </Row>
                {/* Skill 6 */}
                <Row style={styles.skill} className="d-flex flex-wrap">
                    <Col style={styles.skillContentHeading}>
                        Cloud Techonologies:
                    </Col>
                    <Col style={styles.skillContentContent}>
                        AWS EC2, Google Cloud , IBM Cloud , Compute Canada Cloud
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;
