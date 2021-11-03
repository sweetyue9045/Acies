import '../components/Enter.css';
import GIF from "../assets/im/start_gif.gif";
import PARALLAX from "../assets/im/parallax.png";
import LOGO from "../assets/im/start_logo.svg";
import LOGO_BG from "../assets/im/start_logo_bg.png";
import BG_L from "../assets/im/start_bg_l.png";
import BG_C from "../assets/im/start_bg_c.png";
import BG_R from "../assets/im/start_bg_r.png";
import Arrow_L from "../assets/im/Arrow_L.svg";
import Arrow_R from "../assets/im/Arrow_R.svg";
import Footer from "../components/Footer"

import { Link } from "react-router-dom"
import { Parallax } from "react-parallax";

function Enter() {
    const win_wid = window.innerWidth;
    const win_hei = window.innerHeight;
    const percent = 1440 / win_wid;
    let hh = '1350px';
    if (win_wid > win_hei) {
        hh = ((1041 * percent) + (309 * percent)) + 'px';
    }
    else { hh = '1350px'; }

    return (
        <div>
            <Parallax renderLayer={percentage => (
                <img src={GIF}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: percentage * 500 - 500,
                        transform: 'translateX(-50%)',
                        width: percent * 100 + '%',
                        height: 'auto',
                    }}
                />
            )} >
                <div className="enter_top"
                    style={{
                        width: percent * 100 + '%',
                        height: hh,
                    }}>
                    <div className="logo" >
                        <img src={LOGO_BG} />
                        <img src={LOGO} />
                    </div>
                    <img src={PARALLAX} className="parallax" />
                </div>
            </Parallax>
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