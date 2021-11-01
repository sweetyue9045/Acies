import './Nav.css';
import LOGO from "../assets/im/nav_logo.svg";
import { Link } from "react-router-dom"


export default function Nav() {
    return (
        <nav>
<<<<<<< HEAD
            <div className="logo">
                <div className="logoL">Taichung </div>
                <div className="logoR">| BRT | 303 | BUS |</div>
            </div>
            <ul className="menuh">
                <li><a href="#ABT" id="btnA" title="關於">關於 ⏷</a>
                    <div className="button">
                        <ul>
                            <li><a href="#SepF" id="btnF" title="前言">前言</a></li>
                            <li><a href="#TAICHUNG" id="btnT" title="認識台中">認識台中</a></li>
                            <li><a href="#BRT" id="btnB" title="認識BRT">認識BRT</a></li>
                            <li><a href="#ROUTE" id="btnR" title="303路線">303路線</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#INTRO" id="btnI" title="景點介紹">景點介紹</a></li>
                <li><a href="#RECOMMEND" id="btnC" title="我要推薦">我要推薦</a></li>
                <li><a href="#OTHERS" id="btnO" title="其他">其他</a></li>
                <li><a href="#OTHERS" id="btnO" title="其他">這次新增的東西</a></li>
                <li><a href="#OTHERS" id="btnO" title="其他">TEST123</a></li>
=======
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
>>>>>>> meng
            </ul>
        </nav>
    );
}