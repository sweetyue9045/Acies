import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/lotties/loading.json";

export default function Loading(){

    const sequence = {
        segments: [10, 15],
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
    

return(
    <>
        <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
            playSegments={sequence}
            />
    </>
);
}