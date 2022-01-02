
import GIF from "../../assets/im/start_gif.gif";
import PARALLAX from "../../assets/im/start_parallax.png";
import LOGO from "../../assets/im/start_logo.svg";
import LOGO_BG from "../../assets/im/start_logo_bg.png";
import arrow from "../../assets/lotties/arrow.json";

import Lottie from "react-lottie";
import { useContext } from "react";
import { ScrollY } from "../../pages/Home";

export default function Enter() {
    const offsetY = useContext(ScrollY);
    const gifstyle = {};
    const arrowstyle = {}
    if (document.body.clientWidth <= 834) {
        gifstyle.top = 0;
        arrowstyle.top = "87vh";
    }
    else {
        gifstyle.top = offsetY * 0.3 + "px";
        arrowstyle.top = "calc(87vh + "+offsetY * 0.3 + "px)";
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: arrow,

        renderSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <img src={GIF} className="img_gif" alt="GIF"
                style={gifstyle}
            />
            <div className="home_arrow" style={arrowstyle}>
                <Lottie
                    options={defaultOptions}
                    height={100}
                    width={100}
                />
            </div>
            <div className="enter_top" id="enter">
                <div className="logo" >
                    <img src={LOGO_BG} alt="LOGO_BG" />
                    <img src={LOGO} alt="LOGO" />
                </div>
                <img src={PARALLAX} className="parallax" alt="PARALLAX" />
            </div>
        </>
    );
}