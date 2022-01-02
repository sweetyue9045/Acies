import "./HContent.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/loading.json";
import { useState } from "react";

export default function Loading(){
    const [speed, setspeed] = useState(1);
    const sequence = {
        segments: [5, 0],
        forceFlag: true
      }

    const defaultOptions = {
        loop:true,
        autoplay:true,
        animationData:animationData,
    
        renderSettings:{
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    setTimeout(() => {
        setspeed(-speed);
    },1200);

return(
    <div className="myloading">
        <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
            speed={speed}
            />
    </div>
);
}