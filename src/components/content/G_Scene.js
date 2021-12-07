import Title from "./G_Title";

import SCENE_TOWN from "../../assets/im/scene_town.png"
import SCENE_WATER from "../../assets/im/scene_water_capital.png"
import SCENE_SHRINE from "../../assets/im/scene_shrine.png"
import SCENE_MURAL from "../../assets/im/scene_mural.png"

export default function Scene() {
    return (
        <div className="scene">
            <Title Title="遊戲場景" />
            <div className="content">
                <img src={SCENE_TOWN} alt="SCENE_TOWN" />
                <img src={SCENE_WATER} alt="SCENE_WATER" />
                <img src={SCENE_SHRINE} alt="SCENE_SHRINE" />
                <img src={SCENE_MURAL} alt="SCENE_MURAL" />
            </div>
        </div>
    );
}