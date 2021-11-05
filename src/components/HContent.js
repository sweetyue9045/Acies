import './HContent.css';
import LOGO from "../assets/im/home_logo.svg";
import VIDEO_L from "../assets/im/video_l.svg";
import VIDEO_R from "../assets/im/video_r.svg";
import ARROW_L from "../assets/im/home_arrow_l.svg";
import ARROW_R from "../assets/im/home_arrow_r.svg";
import VIDEO from "../assets/im/video.png";
import SKILL from "../assets/im/skill.png";
import X_btn from "../assets/im/X_btn.svg";

import SISTER_L from "../assets/im/sister_L.png";
import SISTER_R from "../assets/im/sister_R.png";

import SISTER_R2 from "../assets/im/sister_R2.png";
import SISTER_L2 from "../assets/im/sister_L2.png";

import BG_TEXT from "../assets/im/bg_text.png";
import BG_TEXT2 from "../assets/im/bg_text2.png";

import BTN_CANCEL from "../assets/im/cancel.svg";

export default function HContent() {

    var click = function (element) {
        if (element.target.id === "sister_R") {
            document.getElementById(element.target.id).classList.remove("state");
            document.getElementById(element.target.id).classList.add("flip");
            document.getElementById('sister_L').classList.add("leftfadeout");
            document.getElementById('textL').classList.add("leftfadein");

            document.getElementById('page2L').classList.add("leftfadein");
            var flipAnimation = function () {
                document.getElementById(element.target.id).classList.add("flip-reverse");
                document.getElementById(element.target.id).classList.remove("flip");
                document.getElementById(element.target.id).src = SISTER_R2;
                document.getElementById('nameL').classList.add("displaynone");
                document.getElementById('sister_L').classList.add("displaynone");
               
                //document.getElementById('nameL').style.display = "none";
                document.getElementById('page2L').style.display = "block";
                document.getElementById('textL').style.display = "block";
            };
            setTimeout(flipAnimation, 800);
        }
        else if (element.target.id === "sister_L") {
            document.getElementById(element.target.id).classList.remove("state");
            document.getElementById(element.target.id).classList.add("flip");
            document.getElementById('sister_R').classList.add("rightfadeout");
            document.getElementById('textR').classList.add("rightfadein");

            document.getElementById('page2R').classList.add("rightfadein");
            var flipAnimation = function () {
                document.getElementById(element.target.id).classList.add("flip-reverse");
                document.getElementById(element.target.id).classList.remove("flip");
                document.getElementById(element.target.id).src = SISTER_L2;
                document.getElementById('sister_R').style.display = "none";
                document.getElementById('nameR').style.display = "none";
                document.getElementById('page2R').style.display = "block";
                document.getElementById('textR').style.display = "block";
            };
            setTimeout(flipAnimation, 800);
        }

    }
    
    var animL = function () {
        document.getElementById('nameL').classList.remove("displaynone");

       // document.getElementById('sister_R').classList.remove("flip-reverse");
        document.getElementById('sister_R').classList.add("flip");
       // document.getElementById('textL').classList.remove("leftfadein");
        document.getElementById('textL').classList.add("leftfadeout");
        document.getElementById('page2L').classList.add("leftfadeout");
       // document.getElementById('page2L').classList.remove("leftfadein");
        document.getElementById('sister_L').classList.add("flip-reverse");
        document.getElementById('sister_L').src=SISTER_L;
        

        var flipAnimation = function () {
            document.getElementById('sister_R').classList.add("flip-reverse");
            document.getElementById('sister_R').src=SISTER_R;
           document.getElementById('textL').style.display="none";
           document.getElementById('page2L').style.display="none";
           document.getElementById('sister_L').style.display="block";
        };
        setTimeout(flipAnimation, 800);
    }
    var animR = function () {

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
                        <img id="page2L" className="page2" src={BG_TEXT} />

                        <div id="textL" className="text"> <img id="cancelL" onClick={animL} src={BTN_CANCEL} />雙胞胎中的姊姊<br />個性驕傲嚴謹，內心是個溫柔的人。因為總會管教妹妹，兩人之間發生不少爭執。<br /><br />冒險旅途中會披上祖傳披風，也會增加許多民俗感的小元素。</div>
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

                        <img id="page2R" className="page2" src={BG_TEXT2} />
                        <div id="textR" className="text"> <img id="cancelR" onClick={animR()} src={BTN_CANCEL} />雙胞胎中的妹妹<br />個性活潑開朗、 樂於助人，容易衝動 犯錯，內心渴望於他人的認可。<br /><br />冒險旅途中會變成靈魂型態，保有原本特色並且跟隨在姊姊身旁。</div>
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
        </div>
    );
}