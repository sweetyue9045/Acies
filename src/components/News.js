import './News.css';
import LOGO from "../assets/im/logo.svg";
import BG from "../assets/im/bg.svg";
import { Link } from "react-router-dom"


export default function News() {
    return (
        <div>
            <div className="feature">
             <img src={LOGO} />
            </div>
        </div>
    );
}