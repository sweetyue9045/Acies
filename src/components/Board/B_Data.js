import DATA_PLAN from "../../assets/im/data_plan.svg"
import DATA_INTRO from "../../assets/im/data_intro.svg"

export default function Data() {
    return (
        <div className="data">
            <a href="https://drive.google.com/file/d/1NJdzM0ngJoukLee-YZKTkbeaHHzL1kX-/view" target="_blank" rel="noreferrer" className="data_link">
                <img src={DATA_PLAN} alt="DATA_PLAN" />
                <div className="data_ch">企劃書</div>
                <div className="data_en">PLAN DOC</div>
            </a>
            <a href="https://docs.google.com/presentation/d/1Lvh3ahMIZKbyEIfSaK5jPE4o7QqHQVQM/edit#slide=id.p1" target="_blank" rel="noreferrer" className="data_link">
                <img src={DATA_INTRO} alt="DATA_INTRO" />
                <div className="data_ch">介紹簡報</div>
                <div className="data_en">INTRO DECK</div>
            </a>
        </div>
    );
}