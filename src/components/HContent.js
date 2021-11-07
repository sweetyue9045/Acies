import './HContent.css';
import LOGO from "../assets/im/home_logo.svg";
import VIDEO_L from "../assets/im/video_l.svg";
import VIDEO_R from "../assets/im/video_r.svg";
import ARROW_L from "../assets/im/home_arrow_l.svg";
import ARROW_R from "../assets/im/home_arrow_r.svg";
import VIDEO from "../assets/im/video.png";
import SKILL from "../assets/im/skill.png";
import X_btn from "../assets/im/X_btn.svg";
import V_MOSSINA from "../assets/im/v_mossina.svg"
import V_AFEITE from "../assets/im/v_afeite.svg"
import V_SCALE from "../assets/im/v_scale.svg"
import V_TAMA from "../assets/im/v_tama.svg"
import V_MOSSINA_BG from "../assets/im/v_mossina_bg.png"
import V_AFEITE_BG from "../assets/im/v_afeite_bg.png"
import V_SCALE_BG from "../assets/im/v_scale_bg.png"
import V_TAMA_BG from "../assets/im/v_tama_bg.png"

import { useState, useEffect } from "react";
import ReactDOM from "react-dom"


export default function HContent() {
    const [offsetY, setOffsetY] = useState(0);
    const [flag, setflag] = useState(0);
    var v_top = document.getElementById("village");
    const handleScroll = () => {
        setOffsetY(document.documentElement.scrollTop);

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll, true);

    }, []);
    if (offsetY > 0 && flag == 0) {
        setflag(ReactDOM.findDOMNode(v_top).getBoundingClientRect().top);
    }
    const e = document.getElementsByClassName("hr_column");
    if (offsetY >= flag && flag != 0) {
        for (let i = 0; i < e.length; i++) {
            e[i].classList.add('v_fadein');
        }
        setTimeout(function () {
            document.getElementById('v_mossina').classList.add('v_fadein');
        }, 500);
        setTimeout(function () {
            document.getElementById('v_scale').classList.add('v_fadein');
        }, 1000);
        setTimeout(function () {
            document.getElementById('v_afeite').classList.add('v_fadein');
        }, 1500);
        setTimeout(function () {
            document.getElementById('v_tama').classList.add('v_fadein');
        }, 2000);
    }
    // else if (offsetY < flag-200 && flag != 0) {
    //     console.log("我出去囉")
    //     for (let i = 0; i < e.length; i++) {
    //         e[i].classList.remove('v_fadein');
    //     }
    //     document.getElementById('v_mossina').classList.remove('v_fadein');
    //     document.getElementById('v_scale').classList.remove('v_fadein');
    //     document.getElementById('v_afeite').classList.remove('v_fadein');
    //     document.getElementById('v_tama').classList.remove('v_fadein');

    // }
    return (
        <div>
            <div className="feature">
                <img src={LOGO} />
                <div className="content">
                    眼動儀與手把結合<br />2D橫向卷軸動作解謎遊戲
                </div>
                <div className="content">
                    突如其然的一場意外造成妹妹薇妲失去身體，為了尋回妹妹的身體，玩家將扮演一對雙胞胎姊妹，前往三個神秘部落，展開一場冒險旅程。
                </div>
            </div>
            <div className="sister">
                <div className="page">
                    <div className="name">
                        <img src={ARROW_L} />
                        <div className="title_text">薇妲</div>
                        <img src={ARROW_R} />
                    </div>
                    <div>
                        <img src={sister_L} />
                        <img className="bg_grass" src={grass_L} />
                    </div>
                </div>
                <div className="page">
                    <div className="name">
                        <img src={ARROW_L} />
                        <div className="title_text">莉妲</div>
                        <img src={ARROW_R} />
                    </div>
                    <div>
                        <img classNam ="sisterimg_R"src={sister_R} />
                        <img className="bg_grass" src={grass_R} />
                    </div>
                </div>
            </div>
            <div className="video">
                <img src={VIDEO_L} className="video_bg" />
                <div className="content">
                    <div className="video_block">
                        <div className="title">
                            <img src={ARROW_L} />
                            <div className="title_text">平台機關</div>
                            <img src={ARROW_R} />
                        </div>
                        <img src={VIDEO} />
                    </div>
                    <div className="video_block">
                        <div className="title">
                            <img src={ARROW_L} />
                            <div className="title_text">專注力遊戲</div>
                            <img src={ARROW_R} />
                        </div>
                        <img src={VIDEO} />
                    </div>
                    <div className="video_block">
                        <div className="title">
                            <img src={ARROW_L} />
                            <div className="title_text">BOSS戰</div>
                            <img src={ARROW_R} />
                        </div>
                        <img src={VIDEO} />
                    </div>
                </div>
                <img src={VIDEO_R} className="video_bg" />
            </div>
            <hr />
            <div className="skill">
                <div className="title">
                    <img src={ARROW_L} />
                    <div className="title_text">技能介紹</div>
                    <img src={ARROW_R} />
                </div>
                <div className="content">
                    <img src={SKILL} />
                    <div className="skill_text">
                        <div className="title">凝聚之光</div>
                        <div className="explain">
                            按下<img src={X_btn} className="game_btn" />
                            ，注視靈魂與法鈴啟動技能。
                        </div>
                    </div>
                </div>
                <div className="content">
                    <img src={SKILL} />
                    <div className="skill_text">
                        <div className="title">凝聚之光</div>
                        <div className="explain">
                            按下<img src={X_btn} className="game_btn" />
                            ，注視靈魂與法鈴啟動技能。
                        </div>
                    </div>
                </div>
            </div>
            <div className="village" id="village">
                <div className="logo" id="v_mossina">
                    <img src={V_MOSSINA_BG} className="v_bg" />
                    <img src={V_MOSSINA} className="v_logo v_mossina" />
                    <div className="v_en v_mossina">MOSSINA</div>
                    <div className="v_in v_mossina">
                        被封印在神殿的神，陷入漫長的沉睡中，是所有信仰的起源。
                    </div>
                    <div className="v_ch v_mossina">魔森納</div>
                </div>
                <hr className="hr_column" />
                <div className="logo" id="v_scale">
                    <img src={V_SCALE_BG} className="v_bg" />
                    <img src={V_SCALE} className="v_logo v_scale" />
                    <div className="v_en v_scale">SCALE</div>
                    <div className="v_in v_scale">
                        傳說中受到神龍眷顧的民族，藍白色圓頂神殿為其主要特色。
                    </div>
                    <div className="v_ch v_scale">斯克爾</div>
                </div>
                <hr className="hr_column" />
                <div className="logo" id="v_afeite">
                    <img src={V_AFEITE_BG} className="v_bg" />
                    <img src={V_AFEITE} className="v_logo v_afeite" />
                    <div className="v_en v_afeite">AFEITE</div>
                    <div className="v_in v_afeite">
                        居住在丘陵的特殊民族，體型高大魁武。大多為石製建築。
                    </div>
                    <div className="v_ch v_afeite">亞斐特</div>
                </div>
                <hr className="hr_column" />
                <div className="logo" id="v_tama">
                    <img src={V_TAMA_BG} className="v_bg" />
                    <img src={V_TAMA} className="v_logo v_tama" />
                    <div className="v_en v_tama">TAMA</div>
                    <div className="v_in v_tama">
                        藏身叢林的傳統民族，有特殊的靈紋裝飾。建築以草房為主。
                    </div>
                    <div className="v_ch v_tama">塔瑪</div>
                </div>
            </div>
        </div>
    );
}