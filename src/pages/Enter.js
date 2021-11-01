import '../components/Enter.css';
import BG_L from "../assets/im/bg_l.png";
import BG_C from "../assets/im/bg_c.png";
import BG_R from "../assets/im/bg_r.png";
import Arrow_L from "../assets/im/Arrow_L.svg";
import Arrow_R from "../assets/im/Arrow_R.svg";
import Footer from "../components/Footer"

import { Link } from "react-router-dom"

function Enter() {
    return (
        <div>

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