import Title from "./H_Title";

import STORY_STAFF from "../../assets/im/story_staff.png"


export default function Story() {
    return (
        <div className="story" id="story">
            <div className="content">
                <div className="text">
                    <Title Title="隨著法鈴封印解除" />
                    <Title Title="古老的魔法再次出現" />
                    <img src={STORY_STAFF} alt="STORY_STAFF" className="story_img1"/>
                    <div className="t_content">
                        在家中意外獲得的法鈴，與變成靈體的妹妹突然能使用古老的魔法！使用<p>眼動儀</p>來驅動的法鈴，利用自身的專注力，探索部落與解決難題的旅程就此展開！
                    </div>
                </div>
                <img src={STORY_STAFF} alt="STORY_STAFF" className="story_img2"/>
            </div>
        </div>
    );
}