import './Footer.css';
import FOOTER from "../assets/im/footer_right.svg";

export default function Footer() {
    return (
        <footer>
            <div className="footer_left">
                ＡＣＩＥＳ - TWIN JOURNEY
            </div>
            <div className="footer_right">
                <img src={FOOTER} />
            </div>
        </footer>
    );
}