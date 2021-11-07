import './HContent.css';
import LOGO from "../assets/im/home_logo.svg";

import ARROW_L from "../assets/im/home_arrow_l.svg";
import ARROW_R from "../assets/im/home_arrow_r.svg";

import SISTER_L from "../assets/im/sister_L.png";
import SISTER_R from "../assets/im/sister_R.png";
import SISTER_L2 from "../assets/im/sister_L2.png";
import SISTER_R2 from "../assets/im/sister_R2.png";
import BG_TEXT from "../assets/im/bg_text.png";
import BG_TEXT2 from "../assets/im/bg_text2.png";
import BTN_CANCEL from "../assets/im/cancel.svg";

import V_BG_L from "../assets/im/video_l.svg";
import V_BG_R from "../assets/im/video_r.svg";
import V_AGENCY from "../assets/im/video_agency.mp4";
import V_GAME from "../assets/im/video_game.mp4";
import V_BOSS from "../assets/im/video_BOSS.mp4";

import S_X from "../assets/im/skill_X_btn.mp4";
import S_Y from "../assets/im/skill_Y_btn.mp4";
import X_btn from "../assets/im/skill_X_btn.svg";
import Y_btn from "../assets/im/skill_Y_btn.svg";
import A_btn from "../assets/im/skill_A_btn.svg";

import V_MOSSINA from "../assets/im/village_mossina.svg"
import V_AFEITE from "../assets/im/village_afeite.svg"
import V_SCALE from "../assets/im/village_scale.svg"
import V_TAMA from "../assets/im/village_tama.svg"
import V_MOSSINA_BG from "../assets/im/village_mossina_bg.png"
import V_AFEITE_BG from "../assets/im/village_afeite_bg.png"
import V_SCALE_BG from "../assets/im/village_scale_bg.png"
import V_TAMA_BG from "../assets/im/village_tama_bg.png"

import S_TOWN from "../assets/im/scene_town.png"
import S_WATER from "../assets/im/scene_water_capital.png"
import S_SHRINE from "../assets/im/scene_shrine.png"
import S_MURAL from "../assets/im/scene_mural.png"

import S_STEAM from "../assets/im/sale_steam.svg"
import S_SWITCH from "../assets/im/sale_switch.svg"
import S_PS4 from "../assets/im/sale_PS4.svg"

import { useState, useEffect } from "react";
import ReactDOM from "react-dom"

export default function HContent() {
    const [offsetY, setOffsetY] = useState(0);
    const [flag, setflag] = useState(0);
    const handleScroll = () => {
        setOffsetY(document.documentElement.scrollTop);
    }
    const v_top = document.getElementById("village");
    const hr_c = document.getElementsByClassName("hr_column");

    // 監聽滾動
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll, true);
    }, []);

    // 抓取加動畫位置
    if (offsetY > 0 && flag == 0) {
        setflag(ReactDOM.findDOMNode(v_top).getBoundingClientRect().top);
    }

    // 加動畫
    if (offsetY >= flag - 300 && flag != 0) {
        for (let i = 0; i < hr_c.length; i++) {
            hr_c[i].classList.add('v_fadein');
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

    var click = function (e) {
        var targetR = document.getElementById('sister_R');
        var targetpageR = document.getElementById('page2R');
        var targettextR = document.getElementById('textR');
        var targetnameR = document.getElementById('nameR');

        var targetL = document.getElementById('sister_L');
        var targetpageL = document.getElementById('page2L');
        var targettextL = document.getElementById('textL');
        var targetnameL = document.getElementById('nameL');

        if (e.target.id === 'sister_R') {

            targetR.classList.add('flip');
            targetL.classList.add('leftfadeout');

            var animEnd = function () {
                targetR.classList.add('flip2');
                targetR.src = SISTER_R2;

                targetL.classList.add('displaynone');
                targetnameL.classList.add('displaynone2');

                targetpageL.classList.remove('displaynone');
                targetpageL.classList.add('leftfadein');

                targettextL.classList.remove('displaynone');
                targettextL.classList.add('leftfadein');
                setTimeout(reset, 500)
            }
            setTimeout(animEnd, 400);

            var reset = function () {
                targetL.classList.remove('leftfadeout');
                targetL.classList.remove('leftfadein');

            }
        }
        else if (e.target.id === "sister_L") {

            targetL.classList.add('flip');
            targetR.classList.add('rightfadeout');

            var animEnd = function () {
                targetL.classList.add('flip2');
                targetL.src = SISTER_L2;

                targetR.classList.add('displaynone');
                targetnameR.classList.add('displaynone2');

                targetpageR.classList.remove('displaynone');
                targetpageR.classList.add('rightfadein');

                targettextR.classList.remove('displaynone');
                targettextR.classList.add('rightfadein');
                setTimeout(reset, 500)
            }
            setTimeout(animEnd, 400);

            var reset = function () {
                targetR.classList.remove('rightfadeout');
                targetR.classList.remove('rightfadein');
            }
        }
    }

    var animL = function () {
        var targetR = document.getElementById('sister_R');

        var targetL = document.getElementById('sister_L');
        var targetpageL = document.getElementById('page2L');
        var targettextL = document.getElementById('textL');
        var targetnameL = document.getElementById('nameL');

        targetR.classList.add('flip-reverse');

        targetpageL.classList.remove('leftfadein');
        targettextL.classList.remove('leftfadein');

        targetpageL.classList.add('leftfadeout');
        targettextL.classList.add('leftfadeout');

        var animEnd = function () {

            targetR.classList.add('flip2-reverse');
            targetR.src = SISTER_R;

            targetpageL.classList.add('displaynone');
            targettextL.classList.add('displaynone');

            targetnameL.classList.remove('displaynone2');

            targetL.classList.add('leftfadein');
            targetL.classList.remove('displaynone');
            setTimeout(reset, 500);
        }
        setTimeout(animEnd, 400);

        var reset = function () {
            targetR.classList.remove('flip');
            targetR.classList.remove('flip2');
            targetR.classList.remove('flip-reverse');
            targetR.classList.remove('flip2-reverse');
            targetR.classList.remove('leftfadeout');
            targetL.classList.remove('leftfadein');
        }
    }

    var animR = function () {
        var targetL = document.getElementById('sister_L');

        var targetR = document.getElementById('sister_R');
        var targetpageR = document.getElementById('page2R');
        var targettextR = document.getElementById('textR');
        var targetnameR = document.getElementById('nameR');

        targetL.classList.add('flip-reverse');

        targetpageR.classList.remove('rightfadein');
        targettextR.classList.remove('rightfadein');

        targetpageR.classList.add('rightfadeout');
        targettextR.classList.add('rightfadeout');

        var animEnd = function () {

            targetL.classList.add('flip2-reverse');
            targetL.src = SISTER_L;

            targetpageR.classList.add('displaynone');
            targettextR.classList.add('displaynone');

            targetnameR.classList.remove('displaynone2');

            targetR.classList.add('rightfadein');
            targetR.classList.remove('displaynone');
            setTimeout(reset, 500);
        }
        setTimeout(animEnd, 400);

        var reset = function () {
            targetL.classList.remove('flip');
            targetL.classList.remove('flip2');
            targetL.classList.remove('flip-reverse');
            targetL.classList.remove('flip2-reverse');
            targetL.classList.remove('rightfadeout');
            targetR.classList.remove('rightfadein');
        }

    }
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
                    <div className="name" id="nameL">
                        <img src={ARROW_L} />
                        <div className="title_text">薇妲</div>
                        <img src={ARROW_R} />
                    </div>
                    <div className="sisimg">
                        <img className="state" id="sister_L" onClick={click.bind(this)} src={SISTER_L} />
                        <img id="page2L" className="page2 displaynone" src={BG_TEXT} />
                        <div id="textL" className="text displaynone"> <img id="cancelL" onClick={animL} src={BTN_CANCEL} />雙胞胎中的姊姊<br />個性驕傲嚴謹，內心是個溫柔的人。因為總會管教妹妹，兩人之間發生不少爭執。<br /><br />冒險旅途中會披上祖傳披風，也會增加許多民俗感的小元素。</div>
                    </div>
                </div>
                <div className="page">
                    <div className="name" id="nameR">
                        <img src={ARROW_L} />
                        <div className="title_text">莉妲</div>
                        <img src={ARROW_R} />
                    </div>
                    <div className="sisimg" >
                        <img id="sister_R" className="state" src={SISTER_R} onClick={click.bind(this)} />
                        <img id="page2R" className="page2 displaynone" src={BG_TEXT2} />
                        <div id="textR" className="text displaynone"> <img id="cancelR" onClick={animR} src={BTN_CANCEL} />雙胞胎中的妹妹<br />個性活潑開朗、 樂於助人，容易衝動 犯錯，內心渴望於他人的認可。<br /><br />冒險旅途中會變成靈魂型態，保有原本特色並且跟隨在姊姊身旁。</div>
                    </div>
                </div>
            </div>
            <div className="video">
                <img src={V_BG_L} className="video_bg" />
                <div className="content">
                    <div className="video_block">
                        <div className="title">
                            <img src={ARROW_L} />
                            <div className="title_text">平台機關</div>
                            <img src={ARROW_R} />
                        </div>
                        <video width="800" controls>
                            <source src={V_AGENCY} type="video/mp4" />
                            您的瀏覽器不支援此 HTML5 影片標籤
                        </video>
                    </div>
                    <div className="video_block">
                        <div className="title">
                            <img src={ARROW_L} />
                            <div className="title_text">專注力遊戲</div>
                            <img src={ARROW_R} />
                        </div>
                        <video width="800" controls>
                            <source src={V_GAME} type="video/mp4" />
                            您的瀏覽器不支援此 HTML5 影片標籤
                        </video>
                    </div>
                    <div className="video_block">
                        <div className="title">
                            <img src={ARROW_L} />
                            <div className="title_text">BOSS戰</div>
                            <img src={ARROW_R} />
                        </div>
                        <video width="800" controls>
                            <source src={V_BOSS} type="video/mp4" />
                            您的瀏覽器不支援此 HTML5 影片標籤
                        </video>
                    </div>
                </div>
                <img src={V_BG_R} className="video_bg" />
            </div>
            <hr />
            <div className="skill">
                <div className="title">
                    <img src={ARROW_L} />
                    <div className="title_text">技能介紹</div>
                    <img src={ARROW_R} />
                </div>
                <div className="content">
                    <video width="570" controls>
                        <source src={S_X} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                    <div className="skill_text">
                        <div className="title">物體移動</div>
                        <div className="explain">
                            按下<img src={X_btn} className="game_btn game_btn_X" />，注視靈魂與法鈴啟動技能。
                        </div>
                    </div>
                </div>
                <div className="content">
                    <video width="570" controls>
                        <source src={S_Y} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                    <div className="skill_text">
                        <div className="title">凝聚之光</div>
                        <div className="explain">
                            按下<img src={Y_btn} className="game_btn" />啟動技能。注視欲移動物品，按住<img src={A_btn} className="game_btn" />以視線拖曳至目標位置。
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
            <div className="scene">
                <div className="title">
                    <img src={ARROW_L} />
                    <div className="title_text">遊戲場景</div>
                    <img src={ARROW_R} />
                </div>
                <div className="content">
                    <img src={S_TOWN} />
                    <img src={S_WATER} />
                    <img src={S_SHRINE} />
                    <img src={S_MURAL} />
                </div>
            </div>
            <div className="sale">
                <div className="content">
                    <div className="year">2021</div>
                    <div className="date">11.12</div>
                    <div className="s_ch">正式發售</div>
                    <div className="s_en">RELEASE</div>
                    <div className="platform">
                        <img src={S_STEAM} />
                        <img src={S_SWITCH} />
                        <img src={S_PS4} />
                    </div>


                </div>

            </div>
        </div>
    );
}
