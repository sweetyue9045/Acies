import './Nav.css';
import LOGO from "../assets/im/nav_logo.svg";
import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <nav>          
            <Link to={`/`}>
                <div className="logo">
                    <img className="cl cl1" src={LOGO} />
                </div>
            </Link>
            <ul className="menu">
                <li><a className="menu_link">
                    <div className="menu_top">最新消息</div>
                    <div className="menu_bottom">BREAKING NEWS</div>
                </a></li>
                <li><a className="menu_link">
                    <div className="menu_top">專注力遊戲</div>
                    <div className="menu_bottom">CONCENTRATION GAME</div>
                </a></li>
                <li><a className="menu_link">
                    <div className="menu_top">開發團隊</div>
                    <div className="menu_bottom">DEVELOPMENT TEAM</div>
                </a></li>
            </ul>
        </nav>
    );
}