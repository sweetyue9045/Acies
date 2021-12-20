import BACKNAV from "../assets/im/backnav.svg";

import { Link } from "react-router-dom";

export default function BackNav() {
    return (
        <div className="BackNav">
            <Link to={`/board`} className="backnav">
                <img src={BACKNAV} alt="BACKNAV" />
                <p>返回</p>
            </Link>
        </div>
    );
}