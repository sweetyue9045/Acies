import Nav from "../components/Nav"
import HContent from "../components/HContent"
import Footer from "../components/Footer"

import { useState, useEffect, createContext } from "react";

export const ScrollY = createContext();

function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(document.documentElement.scrollTop);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Nav posi="fixed" />
            <ScrollY.Provider value={offsetY}>
                <HContent />
            </ScrollY.Provider>
            <Footer />
        </>
    );
}

export default Home;