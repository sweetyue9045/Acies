
import { useContext } from "react";

import GIF from "../../assets/im/start_gif.gif";
import PARALLAX from "../../assets/im/start_parallax.png";
import LOGO from "../../assets/im/start_logo.svg";
import LOGO_BG from "../../assets/im/start_logo_bg.png";

import { ScrollY } from '../../pages/Home';

export default function Enter() {
    const offsetY = useContext(ScrollY)
    return (
        <>
            <img src={GIF} className="img_gif" alt="GIF"
                style={{
                    top: offsetY * 0.3 + 'px',
                }}
            />
            <div className="enter_top">
                <div className="logo" >
                    <img src={LOGO_BG} alt="LOGO_BG" />
                    <img src={LOGO} alt="LOGO" />
                </div>
                <img src={PARALLAX} className="parallax" alt="PARALLAX" />
            </div>
        </>
    );
}