import Nav from "../components/Nav";
import HContent from "../components/HContent";
import Footer from "../components/Footer";
import animationData from "../assets/lotties/loading.json";
import Loading from "../components/Loading";

import { useState, useEffect, createContext } from "react";

export const ScrollY = createContext();

function Home() {
    const [done,setDone]=useState(undefined);
    const [completed, setcompleted]=useState(undefined);
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(document.documentElement.scrollTop);
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, []);

    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData:animationData,
        renderSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    useEffect(() => {
        setDone(true);

        setTimeout(() => {
            setcompleted(true);
        },3000);
        
    }, [])

    return (
        <>
        {!completed ? (
               <Loading></Loading>
        ) : (
            <>
            <Nav posi="fixed" />
            <ScrollY.Provider value={offsetY}>
                <HContent />
            </ScrollY.Provider>
            <Footer /></>
        )}
          
        </>
    );
}

export default Home;