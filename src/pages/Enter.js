import '../components/Enter.css';
import GIF from "../assets/im/start_gif.gif";
import Parallax from "../assets/im/parallax.png";
import LOGO from "../assets/im/start_logo.svg";
import LOGO_BG from "../assets/im/start_logo_bg.png";
import BG_L from "../assets/im/start_bg_l.png";
import BG_C from "../assets/im/start_bg_c.png";
import BG_R from "../assets/im/start_bg_r.png";
import Arrow_L from "../assets/im/Arrow_L.svg";
import Arrow_R from "../assets/im/Arrow_R.svg";
import Footer from "../components/Footer"

import { Link } from "react-router-dom"

function Enter() {
    return (
        <div>
            <img src={GIF} className="gif_bg" />
            <div className="enter_top">
                <div className="logo" >
                    <img src={LOGO_BG} />
                    <img src={LOGO} />
                </div>
                <img src={Parallax} className="parallax" />
            </div>
            <div className="enter_bottom">
                <img src={BG_L} />
                <img src={BG_C} />
                <img src={BG_R} />
                <Link to="/home" className="start">
                    <img src={Arrow_L} />
                    <div className="start_btn">
                        <div className="start_top">進入官網</div>
                        <div className="start_bottom">OFFICIAL WEBSITE</div>
                    </div>
                    <img src={Arrow_R} />
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Enter;