import Nav from "../components/Nav"
import GContent from "../components/GContent"
import Footer from "../components/Footer"

import { useState, useEffect, createContext } from "react";

export const ScrollY = createContext();

function Game() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(document.documentElement.scrollTop);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Nav />
            <ScrollY.Provider value={offsetY}>
                <GContent />
            </ScrollY.Provider>
            <Footer />
        </>
    );
}

export default Game;