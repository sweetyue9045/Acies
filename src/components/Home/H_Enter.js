
import GIF from "../../assets/im/start_gif.gif";
import PARALLAX from "../../assets/im/start_parallax.png";
import LOGO from "../../assets/im/start_logo.svg";
import LOGO_BG from "../../assets/im/start_logo_bg.png";

import { useContext } from "react";
import { ScrollY } from "../../pages/Home";

export default function Enter() {
    const offsetY = useContext(ScrollY);
    const style = {};
    if (document.body.clientWidth <= 834) style.top = 0;
    else style.top = offsetY * 0.3 + "px";

    return (
        <>
            <img src={GIF} className="img_gif" alt="GIF"
                style={style}
            />
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