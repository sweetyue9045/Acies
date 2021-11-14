import DATA_PLAN from "../../assets/im/data_plan.svg"
import DATA_INTRO from "../../assets/im/data_intro.svg"

export default function Data() {
    return (
        <div className="data">
            <div className="data_link">
                <img src={DATA_PLAN} alt="DATA_PLAN" />
                <div className="data_ch">企劃書</div>
                <div className="data_en">PLAN DOC</div>
            </div>
            <div className="data_link">
                <img src={DATA_INTRO} alt="DATA_INTRO" />
                <div className="data_ch">介紹簡報</div>
                <div className="data_en">INTRO DECK</div>
            </div>
        </div>
    );
}