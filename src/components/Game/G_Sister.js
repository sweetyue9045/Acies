import Title from "./G_Title";

import ARROW_L from "../../assets/im/sister_arrow_l.svg";
import ARROW_R from "../../assets/im/sister_arrow_r.svg";
import SISTER_L from "../../assets/im/sister_L.png";
import SISTER_R from "../../assets/im/sister_R.png";
import SISTER_L2 from "../../assets/im/sister_L2.png";
import SISTER_R2 from "../../assets/im/sister_R2.png";
import SISTER_TEXT_BG from "../../assets/im/sister_text_bg.png";
import SISTER_TEXT2_BG from "../../assets/im/sister_text2_bg.png";
import SISTER_CANCEL from "../../assets/im/sister_cancel_btn.svg";

export default function Sister() {
    // 姊妹打開介紹
    var click_open = function (e) {
        var spstr = e.target.id.split("");
        var open, close, my_src = "";

        if (spstr[spstr.length - 1] === "R") { open = "R"; close = "L"; my_src = SISTER_R2; }
        else if (spstr[spstr.length - 1] === "L") { open = "L"; close = "R"; my_src = SISTER_L2; }

        var target_open = document.getElementById("sister_" + open);
        var target_close = document.getElementById("sister_" + close);
        var targetpage_close = document.getElementById("page2" + close);
        var targettext_close = document.getElementById("text" + close);
        var targetname_close = document.getElementById("name" + close);

        target_open.classList.add("flip");
        target_open.classList.remove("click_point");
        target_close.classList.add(close + "_fadeout");
        targetname_close.classList.add("displaynone2");

        var animEnd = function () {
            target_open.src = my_src;
            target_open.classList.add("flip2");

            target_close.classList.add("displaynone");

            targetpage_close.classList.remove("displaynone");
            targetpage_close.classList.add(close + "_fadein");

            targettext_close.classList.remove("displaynone");
            targettext_close.classList.add(close + "_fadein");
            setTimeout(reset, 400)
        }
        setTimeout(animEnd, 400);

        var reset = function () {
            target_close.classList.remove(close + "_fadeout");
            target_close.classList.remove(close + "_fadein");
        }
    }

    // 姊妹關閉介紹
    var click_close = function (e) {
        var spstr = e.target.id.split("");
        var open, close, my_src = "";

        if (spstr[spstr.length - 1] === "R") { open = "L"; close = "R"; my_src = SISTER_L; }
        else if (spstr[spstr.length - 1] === "L") { open = "R"; close = "L"; my_src = SISTER_R; }

        var target_open = document.getElementById("sister_" + open);
        var target_close = document.getElementById("sister_" + close);
        var targetpage_close = document.getElementById("page2" + close);
        var targettext_close = document.getElementById("text" + close);
        var targetname_close = document.getElementById("name" + close);

        target_open.classList.add("flip-reverse");

        targetpage_close.classList.remove(close + "_fadein");
        targettext_close.classList.remove(close + "_fadein");

        targetpage_close.classList.add(close + "_fadeout");
        targettext_close.classList.add(close + "_fadeout");

        var animEnd = function () {
            target_open.src = my_src;
            target_open.classList.add("flip2-reverse");

            targetpage_close.classList.add("displaynone");
            targettext_close.classList.add("displaynone");

            targetname_close.classList.remove("displaynone2");
            target_close.classList.add(close + "_fadein");
            target_close.classList.remove("displaynone");
            target_open.classList.add("click_point");
            setTimeout(reset, 400);
        }
        setTimeout(animEnd, 400);

        var reset = function () {
            target_open.classList.remove("flip");
            target_open.classList.remove("flip2");
            target_open.classList.remove("flip-reverse");
            target_open.classList.remove("flip2-reverse");
            target_open.classList.remove(close + "_fadeout");
            target_close.classList.remove(close + "_fadein");
        }
    }
    return (
        <div className="sister" id="sister">
            <Title Title_top="姐妹倆的旅程故事" Title_bottom="JOURNEY STORY" ls="28" lss="15" />
            <div className="sisters">
                <div className="page">
                    <div className="sis_title" id="nameL">
                        <img src={ARROW_L} alt="ARROW_L" />
                        <div className="sis_title_text">薇妲</div>
                        <img src={ARROW_R} alt="ARROW_R" />
                    </div>
                    <div className="sisimg">
                        <img id="sister_L" className="state click_point" onClick={click_open.bind(this)} src={SISTER_L} alt="SISTER_L" />
                        <img id="page2L" className="page2 displaynone" src={SISTER_TEXT_BG} alt="SISTER_TEXT_BG" />
                        <div id="textL" className="text displaynone">
                            <img id="cancelL" className="click_point" onClick={click_close.bind(this)} src={SISTER_CANCEL} alt="SISTER_CANCEL" />
                            雙胞胎中的姊姊<br />個性驕傲嚴謹，內心是個溫柔的人。因為總會管教妹妹，兩人之間發生不少爭執。<br /><br />
                            冒險旅途中會披上祖傳披風，也會增加許多民俗感的小元素。
                        </div>
                    </div>
                </div>
                <div className="page">
                    <div className="sis_title" id="nameR">
                        <img src={ARROW_L} alt="ARROW_L" />
                        <div className="sis_title_text">莉妲</div>
                        <img src={ARROW_R} alt="ARROW_R" />
                    </div>
                    <div className="sisimg" >
                        <img id="sister_R" className="state click_point" onClick={click_open.bind(this)} src={SISTER_R} alt="SISTER_R" />
                        <img id="page2R" className="page2 displaynone" src={SISTER_TEXT2_BG} alt="SISTER_TEXT2_BG" />
                        <div id="textR" className="text displaynone">
                            <img id="cancelR" className="click_point" onClick={click_close.bind(this)} src={SISTER_CANCEL} alt="SISTER_CANCEL" />
                            雙胞胎中的妹妹<br />個性活潑開朗、樂於助人，容易衝動 犯錯，內心渴望於他人的認可。<br /><br />
                            冒險旅途中會變成靈魂型態，保有原本特色並且跟隨在姊姊身旁。
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}