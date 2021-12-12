import "./A_Nav.css";
import LOGO from "../assets/im/a_nav_logo.svg";
import IM from "../assets/im/a_nav_im.png";

export default function Nav({ bg, posi }) {
    return (
        <div className="a_nav" style={{ backgroundColor: bg, position: posi }}>
            <div className="nav_left">
                <div className="logo">
                    <img src={LOGO} alt="LOGO" />
                </div>
                <div className="symbol">
                    管理模式
                </div>
            </div>
            <div className="nav_right">
                <div className="user">吳孟儒</div>
                <div className="user_im">
                    <img src={IM} alt="IM" />
                </div>
            </div>
        </div>
    );
}