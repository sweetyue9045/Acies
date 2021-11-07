import '../components/Enter.css';
import GIF from "../assets/im/start_gif.gif";
import PARALLAX from "../assets/im/start_parallax.png";
import LOGO from "../assets/im/start_logo.svg";
import LOGO_BG from "../assets/im/start_logo_bg.png";
import BG_L from "../assets/im/start_bg_l.png";
import BG_C from "../assets/im/start_bg_c.png";
import BG_R from "../assets/im/start_bg_r.png";
import Arrow_L from "../assets/im/start_arrow_L.svg";
import Arrow_R from "../assets/im/start_arrow_R.svg";
import Footer from "../components/Footer"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

function Enter() {
    const win_wid = document.body.clientWidth;
    const win_hei = document.body.clientHeight;
    let percent
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(document.documentElement.scrollTop);

    let hh = '1350px';
    if (win_wid > win_hei) {
        if (win_wid <= 1440) {
            percent = 1440 / win_wid;
            hh = ((1041 * percent) + (290 * percent));

        } else if (win_wid > 1440) {
            percent = win_wid / 1440;
            hh = ((1041 * percent) + (600 * percent));

        }
    }
    else { hh = '1350'; }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll);

    }, []);

    return (
        <div>
            <img src={GIF} className="img_gif"
                style={{
                    width: percent * 100 + '%',
                    top: offsetY * 0.3 + 'px',
                }}
            />
            <div className="enter_top"
                style={{
                    height: hh + 'px',
                }}>
                <div className="logo" >
                    <img src={LOGO_BG} />
                    <img src={LOGO} />
                </div>
                <img src={PARALLAX} className="parallax" />
            </div>
            <div className="enter_bottom"
                style={{
                    margin: -hh / 10 + 'px 0 0 0'
                }}>
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