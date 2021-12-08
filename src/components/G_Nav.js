import './G_Nav.css';
import LOGO from "../assets/im/nav_logo.svg";


export default function G_Nav() {
    return (
        <nav>
            <div className="logo">
                <img className="logo_photo" src={LOGO} alt="LOGO" />
                <div className="state">管理模式</div>
            </div>
            <div>
                <div className="login_state">尚未登入</div>
                <div className="login_photo">
                    <img src='' alt="login_photo" />
                </div>
            </div>

        </nav>
    );
}