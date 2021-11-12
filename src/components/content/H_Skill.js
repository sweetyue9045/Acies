import Title from "./H_Title";

import SKILL_X from "../../assets/im/skill_X_btn.mp4";
import SKILL_Y from "../../assets/im/skill_Y_btn.mp4";
import SKILL_X_btn from "../../assets/im/skill_X_btn.svg";
import SKILL_Y_btn from "../../assets/im/skill_Y_btn.svg";
import SKILL_A_btn from "../../assets/im/skill_A_btn.svg";

export default function Skill() {
    return (
        <div className="skill">
            <Title Title="技能介紹" />
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
    );
}