
import { useContext } from "react";

import GIF from "../../assets/im/start_gif.gif";
import PARALLAX from "../../assets/im/start_parallax.png";
import LOGO from "../../assets/im/start_logo.svg";
import LOGO_BG from "../../assets/im/start_logo_bg.png";

import { ScrollY } from '../../pages/Home';

export default function Enter() {
    const win_wid = document.body.clientWidth;
    const win_hei = document.body.clientHeight;
    let percent
    const offsetY = useContext(ScrollY)

    let hh = '1350px';
    if (win_wid > win_hei) {
        if (win_wid <= 1440) {
            percent = 1440 / win_wid;
            hh = ((1041 * percent) + (290 * percent));

        } else if (win_wid > 1440) {
            percent = win_wid / 1440;
            hh = ((1041 * percent) + (600 * percent));

        }
    }
    else { hh = '1350'; }
    return (
        <>
            <img src={GIF} className="img_gif" alt="GIF"
                style={{
                    width: percent * 100 + '%',
                    top: offsetY * 0.3 + 'px',
                }}
            />
            <div className="enter_top"
                style={{
                    height: hh + 'px',
                }}>
                <div className="logo" >
                    <img src={LOGO_BG} alt="LOGO_BG" />
                    <img src={LOGO} alt="LOGO" />
                </div>
                <img src={PARALLAX} className="parallax" alt="PARALLAX" />
            </div>
        </>
    );
}