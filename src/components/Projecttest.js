import React, { Component } from "react";
import { useStyles } from "react-styles-hook";
import project1 from "./images/project1.JPG";
import project2 from "./images/project2.JPG";
import project3 from "./images/project3.JPG";
import { Card, Button, CardDeck } from "react-bootstrap";

function Projecttest() {
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
            <CardDeck>
                <Card style={styles.imageAndProjectContainer}>
                    <Card.Img
                        variant="top"
                        src="https://picsum.photos/100/100"
                    />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck>
                <Card>
                    <Card.Img
                        variant="top"
                        src="https://picsum.photos/100/100"
                    />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>
    );
}

export default Projecttest;
