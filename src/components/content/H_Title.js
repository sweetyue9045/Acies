import ARROW_L from "../../assets/im/home_arrow_l.svg";
import ARROW_R from "../../assets/im/home_arrow_r.svg";

export default function Title({Title,Id}) {
    return (
        <div className="title" id={Id}>
            <img src={ARROW_L} alt="ARROW_L" />
            <div className="title_text">{Title}</div>
            <img src={ARROW_R} alt="ARROW_R" />
        </div>
    );
}