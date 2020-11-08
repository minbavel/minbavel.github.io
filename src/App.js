import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Background from "./components/images/background1.jpg";
import { useStyles } from "react-styles-hook";

function App() {
    const styles = useStyles({
        backgroundimage: {
            background: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            // height: "100%",
            // width: "100%",
        },
    });
    return (
        <div>
            <div style={styles.backgroundimage}>
                <Header />
                <Hero />
            </div>
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
