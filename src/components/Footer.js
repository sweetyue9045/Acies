import './Footer.css';
import YPDA from "../assets/im/footer_YPDA.svg";
import KT from "../assets/im/footer_KT.svg";

export default function Footer() {
    return (
        <footer>
            <div className="footer_left">
                ＡＣＩＥＳ - TWIN JOURNEY
            </div>
            <div className="footer_right">
                <img src={YPDA} alt="YPDA"/>
                <img src={KT} alt="KT" />
            </div>
        </footer>
    );
}