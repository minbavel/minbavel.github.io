import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Background from "./components/images/background3.gif";
import { useStyles } from "react-styles-hook";
import Projects from "./components/Projects";

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