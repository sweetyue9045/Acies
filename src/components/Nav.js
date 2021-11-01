import './Nav.css';
import LOGO from "../assets/im/nav_logo.svg";
import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <nav>          
            <Link to="/home">
                <div className="logo">
                    <img src={LOGO} />
                </div>
            </Link>
            <ul className="menu">
                <li><Link to="/news" className="menu_link">
                    <div className="menu_top">最新消息</div>
                    <div className="menu_bottom">BREAKING NEWS</div>
                </Link></li>
                <li><Link to="/game" className="menu_link">
                    <div className="menu_top">專注力遊戲</div>
                    <div className="menu_bottom">CONCENTRATION GAME</div>
                </Link></li>
                <li><Link to="/team" className="menu_link">
                    <div className="menu_top">開發團隊</div>
                    <div className="menu_bottom">DEVELOPMENT TEAM</div>
                </Link></li>
            </ul>
        </nav>
    );
}