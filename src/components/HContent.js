import './HContent.css';
import LOGO from "../assets/im/home_logo.svg";

import ARROW_L from "../assets/im/home_arrow_l.svg";
import ARROW_R from "../assets/im/home_arrow_r.svg";

import SISTER_L from "../assets/im/sister_L.png";
import SISTER_R from "../assets/im/sister_R.png";
import SISTER_L2 from "../assets/im/sister_L2.png";
import SISTER_R2 from "../assets/im/sister_R2.png";
import SISTER_TEXT_BG from "../assets/im/sister_text_bg.png";
import SISTER_TEXT2_BG from "../assets/im/sister_text2_bg.png";
import SISTER_CANCEL from "../assets/im/sister_cancel_btn.svg";

import VIDEO_BG_L from "../assets/im/video_l.svg";
import VIDEO_BG_R from "../assets/im/video_r.svg";
import VIDEO_AGENCY from "../assets/im/video_agency.mp4";
import VIDEO_GAME from "../assets/im/video_game.mp4";
import VIDEO_BOSS from "../assets/im/video_BOSS.mp4";

import SKILL_X from "../assets/im/skill_X_btn.mp4";
import SKILL_Y from "../assets/im/skill_Y_btn.mp4";
import SKILL_X_btn from "../assets/im/skill_X_btn.svg";
import SKILL_Y_btn from "../assets/im/skill_Y_btn.svg";
import SKILL_A_btn from "../assets/im/skill_A_btn.svg";

import VILLAGE_MOSSINA from "../assets/im/village_mossina.svg"
import VILLAGE_AFEITE from "../assets/im/village_afeite.svg"
import VILLAGE_SCALE from "../assets/im/village_scale.svg"
import VILLAGE_TAMA from "../assets/im/village_tama.svg"
import VILLAGE_MOSSINA_BG from "../assets/im/village_mossina_bg.png"
import VILLAGE_AFEITE_BG from "../assets/im/village_afeite_bg.png"
import VILLAGE_SCALE_BG from "../assets/im/village_scale_bg.png"
import VILLAGE_TAMA_BG from "../assets/im/village_tama_bg.png"

import SCENE_TOWN from "../assets/im/scene_town.png"
import SCENE_WATER from "../assets/im/scene_water_capital.png"
import SCENE_SHRINE from "../assets/im/scene_shrine.png"
import SCENE_MURAL from "../assets/im/scene_mural.png"

import SALE_STEAM from "../assets/im/sale_steam.svg"
import SALE_SWITCH from "../assets/im/sale_switch.svg"
import SALE_PS4 from "../assets/im/sale_PS4.svg"

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

    var click_open = function (e) {
        var spstr = e.target.id.split("");
        var open = "";
        var close = "";
        var my_src = "";
        if (spstr[spstr.length - 1] == "R") { open = "R"; close = "L"; my_src = SISTER_R2 }
        else if (spstr[spstr.length - 1] == "L") { open = "L"; close = "R"; my_src = SISTER_L2 }

        var target_open = document.getElementById('sister_' + open);
        var target_close = document.getElementById('sister_' + close);
        var targetpage_close = document.getElementById('page2' + close);
        var targettext_close = document.getElementById('text' + close);
        var targetname_close = document.getElementById('name' + close);

        target_open.classList.add('flip');
        target_close.classList.add(close+'_fadeout');

        var animEnd = function () {
            target_open.classList.add('flip2');
            target_open.src = my_src;

            target_close.classList.add('displaynone');
            targetname_close.classList.add('displaynone2');

            targetpage_close.classList.remove('displaynone');
            targetpage_close.classList.add(close+'_fadein');

            targettext_close.classList.remove('displaynone');
            targettext_close.classList.add(close+'_fadein');
            setTimeout(reset, 500)
        }
        setTimeout(animEnd, 400);

        var reset = function () {
            target_close.classList.remove(close+'_fadeout');
            target_close.classList.remove(close+'_fadein');

        }
    }
    var click_close = function (e) {
        var spstr = e.target.id.split("");
        var open = "";
        var close = "";
        var my_src = "";

        if (spstr[spstr.length - 1] == "R") { open = "L"; close = "R"; my_src = SISTER_L }
        else if (spstr[spstr.length - 1] == "L") { open = "R"; close = "L"; my_src = SISTER_R }

        var target_open = document.getElementById('sister_' + open);
        var target_close = document.getElementById('sister_' + close);
        var targetpage_close = document.getElementById('page2' + close);
        var targettext_close = document.getElementById('text' + close);
        var targetname_close = document.getElementById('name' + close);

        target_open.classList.add('flip-reverse');

        targetpage_close.classList.remove(close+'_fadein');
        targettext_close.classList.remove(close+'_fadein');

        targetpage_close.classList.add(close+'_fadeout');
        targettext_close.classList.add(close+'_fadeout');

        var animEnd = function () {
            target_open.classList.add('flip2-reverse');
            target_open.src = my_src;

            targetpage_close.classList.add('displaynone');
            targettext_close.classList.add('displaynone');

            targetname_close.classList.remove('displaynone2');

            target_close.classList.add(close+'_fadein');
            target_close.classList.remove('displaynone');
            setTimeout(reset, 500);
        }
        setTimeout(animEnd, 400);

        var reset = function () {
            target_open.classList.remove('flip');
            target_open.classList.remove('flip2');
            target_open.classList.remove('flip-reverse');
            target_open.classList.remove('flip2-reverse');
            target_open.classList.remove(close+'_fadeout');
            target_close.classList.remove(close+'_fadein');
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
                        <img id="sister_L" className="state" onClick={click_open.bind(this)} src={SISTER_L} />
                        <img id="page2L" className="page2 displaynone" src={SISTER_TEXT_BG} />
                        <div id="textL" className="text displaynone"> <img id="cancelL" onClick={click_close.bind(this)} src={SISTER_CANCEL} />雙胞胎中的姊姊<br />個性驕傲嚴謹，內心是個溫柔的人。因為總會管教妹妹，兩人之間發生不少爭執。<br /><br />冒險旅途中會披上祖傳披風，也會增加許多民俗感的小元素。</div>
                    </div>
                </div>
                <div className="page">
                    <div className="name" id="nameR">
                        <img src={ARROW_L} />
                        <div className="title_text">莉妲</div>
                        <img src={ARROW_R} />
                    </div>
                    <div className="sisimg" >
                        <img id="sister_R" className="state" onClick={click_open.bind(this)} src={SISTER_R} />
                        <img id="page2R" className="page2 displaynone" src={SISTER_TEXT2_BG} />
                        <div id="textR" className="text displaynone"> <img id="cancelR" onClick={click_close.bind(this)} src={SISTER_CANCEL} />雙胞胎中的妹妹<br />個性活潑開朗、樂於助人，容易衝動 犯錯，內心渴望於他人的認可。<br /><br />冒險旅途中會變成靈魂型態，保有原本特色並且跟隨在姊姊身旁。</div>
                    </div>
                </div>
            </div>
            <div className="video">
                <img src={VIDEO_BG_L} className="video_bg" />
                <div className="content">
                    <div className="video_block">
                        <div className="title">
                            <img src={ARROW_L} />
                            <div className="title_text">平台機關</div>
                            <img src={ARROW_R} />
                        </div>
                        <video width="800" controls>
                            <source src={VIDEO_AGENCY} type="video/mp4" />
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
                            <source src={VIDEO_GAME} type="video/mp4" />
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
                            <source src={VIDEO_BOSS} type="video/mp4" />
                            您的瀏覽器不支援此 HTML5 影片標籤
                        </video>
                    </div>
                </div>
                <img src={VIDEO_BG_R} className="video_bg" />
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
                        <source src={SKILL_X} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                    <div className="skill_text">
                        <div className="title">物體移動</div>
                        <div className="explain">
                            按下<img src={SKILL_X_btn} className="game_btn game_btn_X" />，注視靈魂與法鈴啟動技能。
                        </div>
                    </div>
                </div>
                <div className="content">
                    <video width="570" controls>
                        <source src={SKILL_Y} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                    <div className="skill_text">
                        <div className="title">凝聚之光</div>
                        <div className="explain">
                            按下<img src={SKILL_Y_btn} className="game_btn" />啟動技能。注視欲移動物品，按住<img src={SKILL_A_btn} className="game_btn" />以視線拖曳至目標位置。
                        </div>
                    </div>
                </div>
            </div>
            <div className="village" id="village">
                <div className="logo" id="v_mossina">
                    <img src={VILLAGE_MOSSINA_BG} className="v_bg" />
                    <img src={VILLAGE_MOSSINA} className="v_logo v_mossina" />
                    <div className="v_en v_mossina">MOSSINA</div>
                    <div className="v_in v_mossina">
                        被封印在神殿的神，陷入漫長的沉睡中，是所有信仰的起源。
                    </div>
                    <div className="v_ch v_mossina">魔森納</div>
                </div>
                <hr className="hr_column" />
                <div className="logo" id="v_scale">
                    <img src={VILLAGE_SCALE_BG} className="v_bg" />
                    <img src={VILLAGE_SCALE} className="v_logo v_scale" />
                    <div className="v_en v_scale">SCALE</div>
                    <div className="v_in v_scale">
                        傳說中受到神龍眷顧的民族，藍白色圓頂神殿為其主要特色。
                    </div>
                    <div className="v_ch VILLAGE_SCALE">斯克爾</div>
                </div>
                <hr className="hr_column" />
                <div className="logo" id="v_afeite">
                    <img src={VILLAGE_AFEITE_BG} className="v_bg" />
                    <img src={VILLAGE_AFEITE} className="v_logo v_afeite" />
                    <div className="v_en v_afeite">AFEITE</div>
                    <div className="v_in v_afeite">
                        居住在丘陵的特殊民族，體型高大魁武。大多為石製建築。
                    </div>
                    <div className="v_ch v_afeite">亞斐特</div>
                </div>
                <hr className="hr_column" />
                <div className="logo" id="v_tama">
                    <img src={VILLAGE_TAMA_BG} className="v_bg" />
                    <img src={VILLAGE_TAMA} className="v_logo v_tama" />
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
                    <img src={SCENE_TOWN} />
                    <img src={SCENE_WATER} />
                    <img src={SCENE_SHRINE} />
                    <img src={SCENE_MURAL} />
                </div>
            </div>
            <div className="sale">
                <div className="content">
                    <div className="year">2021</div>
                    <div className="date">11.12</div>
                    <div className="s_ch">正式發售</div>
                    <div className="s_en">RELEASE</div>
                    <div className="platform">
                        <img src={SALE_STEAM} />
                        <img src={SALE_SWITCH} />
                        <img src={SALE_PS4} />
                    </div>


                </div>

            </div>
        </div>
    );
}
