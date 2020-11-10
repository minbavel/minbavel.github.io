import "./App.css";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Background from "./components/images/background3.gif";
import { useStyles } from "react-styles-hook";
import Projects from "./components/Projects";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    const styles = useStyles({
        backgroundimage: {
            background: `url(${Background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
        },
    });
    return (
        <div>
            <div
                class="img-fluid max-width:100%"
                style={styles.backgroundimage}
            >
                <Header />
                <Hero />
            </div>
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
