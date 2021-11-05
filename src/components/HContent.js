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

export default function HContent() {
    var click =function(element) {
       // console.log(document.getElementById(element.target.id).src);
       // var srcc=document.getElementById(element.target.id).id;       
       if (element.target.id === "SISTER_R"){
       // document.getElementById(element.target.id).src=SISTER_R2;
       document.getElementById(element.target.id).classList.add("flip");
       var resetAnimation = function() {
           document.getElementById(element.target.id).classList.add("flip-reverse");
           document.getElementById(element.target.id).classList.remove("flip");
           document.getElementById(element.target.id).src=SISTER_R2;
         };
       setTimeout(resetAnimation, 1000);
       }
       else if(element.target.id === "SISTER_L"){
        document.getElementById(element.target.id).classList.add("flip");
        var resetAnimation = function() {
            document.getElementById(element.target.id).classList.add("flip-reverse");
            document.getElementById(element.target.id).classList.remove("flip");
            document.getElementById(element.target.id).src=SISTER_L2;
          };
        setTimeout(resetAnimation, 1000);
        
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
                    <div className="name">
                        <img src={ARROW_L} />
                        <div className="title_text">薇妲</div>
                        <img src={ARROW_R} />
                    </div>
                    <div className="sisimg">
                        <img id="SISTER_L"  onClick={click.bind(this)} src={SISTER_L} />
                    </div>
                </div>
                <div className="page">
                    <div className="name">
                        <img src={ARROW_L} />
                        <div className="title_text">莉妲</div>
                        <img src={ARROW_R} />
                    </div>
                    <div className="sisimg">
                        <img id="SISTER_R" src={SISTER_R} onClick={click.bind(this)} />
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