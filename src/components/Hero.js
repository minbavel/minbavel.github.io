import React from "react";
import { useStyles } from "react-styles-hook";
import { Row, Col, Container } from "react-bootstrap";

function Hero() {
    const styles = useStyles({
        heroContainer: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "85vh",
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
        skillContentHeading: {
            display: "flex",
            flex: 1,
            justifyContent: "center",
            fontSize: 50,
            color: "white",
        },
        skillContentContent: {
            display: "flex",
            flex: 1,
            fontSize: 50,
            color: "white",
        },
    });
    return (
        <div id="about" style={styles.heroContainer}>
            <Container fluid>
                <Row style={styles.skill} className="d-flex flex-wrap">
                    <Col style={styles.skillContentHeading}>
                        Hi! I am Mohanavel
                    </Col>
                </Row>
            </Container>
            <p style={styles.subheading}>
                I am a Software Developer interested in Machine Learning, Data
                Science and Web Design.
            </p>
        </div>
    );
}

export default Hero;
