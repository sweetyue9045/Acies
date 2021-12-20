import "./BContent.css";
import News from "./Board/B_News";
import Dev from "./Board/B_Dev";
import Data from "./Board/B_Data";

export default function BContent() {
    return (
        <div className="Board">
            <News />
            <Dev />
            <Data />
        </div>
    );
}