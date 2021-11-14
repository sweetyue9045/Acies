import Title from "./H_Title";

import VIDEO_BG_L from "../../assets/im/video_l.svg";
import VIDEO_BG_R from "../../assets/im/video_r.svg";
import VIDEO_AGENCY from "../../assets/im/video_agency.mp4";
import VIDEO_GAME from "../../assets/im/video_game.mp4";
import VIDEO_BOSS from "../../assets/im/video_BOSS.mp4";

export default function Video() {
    return (
        <div className="video">
            <img src={VIDEO_BG_L} className="video_bg" alt="VIDEO_BG_L" />
            <div className="content">
                <div className="video_block">
                    <Title Title="平台機關" />
                    <video width="800" controls>
                        <source src={VIDEO_AGENCY} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                </div>
                <div className="video_block">
                    <Title Title="專注力遊戲" />
                    <video width="800" controls>
                        <source src={VIDEO_GAME} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                </div>
                <div className="video_block">
                    <Title Title="BOSS戰" />
                    <video width="800" controls>
                        <source src={VIDEO_BOSS} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                </div>
            </div>
            <img src={VIDEO_BG_R} className="video_bg" alt="VIDEO_BG_R" />
        </div>
    );
}