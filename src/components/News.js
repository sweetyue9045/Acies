import './News.css';
import LOGO from "../assets/im/logo.svg";
import { Link } from "react-router-dom"


export default function News() {
    return (
        <div>
            <div className="feature">
                <img src={LOGO} />
                <div className="content">
                    眼動儀與手把結合
                </div>
                <div className="content">
                    2D橫向卷軸動作解謎遊戲
                </div>
                <div className="content">
                    突如其然的一場意外造成妹妹薇妲失去身體，為了尋回妹妹的身體，玩家將扮演一對雙胞胎姊妹，前往三個神秘部落，展開一場冒險旅程。
                </div>
            </div>
        </div>
    );
}