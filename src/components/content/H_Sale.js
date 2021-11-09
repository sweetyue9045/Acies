import SALE_STEAM from "../../assets/im/sale_steam.svg"
import SALE_SWITCH from "../../assets/im/sale_switch.svg"
import SALE_PS4 from "../../assets/im/sale_PS4.svg"

export default function Sale() {
    return (
        <div className="sale" id="sale">
            <div className="content">
                <div className="year" id="s_year">2021</div>
                <div className="date" id="s_date">11.12</div>
                <div className="s_ch" id="s_ch">正式發售</div>
                <div className="s_en" id="s_en">RELEASE</div>
                <div className="platform" id="s_platform">
                    <img src={SALE_STEAM} />
                    <img src={SALE_SWITCH} />
                    <img src={SALE_PS4} />
                </div>
            </div>
        </div>
    );
}