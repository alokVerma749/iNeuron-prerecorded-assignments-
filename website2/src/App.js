import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Masterhead from "./components/Masterhead";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Copywright from "./components/Copywright";

function App() {
    return (
        <>
            <Navigation />
            <Masterhead />
            <Portfolio />
            <About />
            <Contact />
            <Footer />
            <Copywright />
        </>
    )
}

export default App;