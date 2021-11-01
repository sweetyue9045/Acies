export default function Nav() {
    return (
        <nav>
            <div className="logo">
                <div className="logoL">Taichung </div>
                <div className="logoR">| BRT | 303 | BUS |</div>
            </div>
            <ul className="menuh">
                <li><a href="#ABT" id="btnA" title="關於">關於 ⏷</a>
                    <div className="button">
                        <ul>
                            <li><a href="#SepF" id="btnF" title="前言">前言</a></li>
                            <li><a href="#TAICHUNG" id="btnT" title="認識台中">認識台中</a></li>
                            <li><a href="#BRT" id="btnB" title="認識BRT">認識BRT</a></li>
                            <li><a href="#ROUTE" id="btnR" title="303路線">303路線</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#INTRO" id="btnI" title="景點介紹">景點介紹</a></li>
                <li><a href="#RECOMMEND" id="btnC" title="我要推薦">我要推薦</a></li>
                <li><a href="#OTHERS" id="btnO" title="其他">其他</a></li>
                <li><a href="#OTHERS" id="btnO" title="其他">這次新增的東西</a></li>
                <li><a href="#OTHERS" id="btnO" title="其他">TEST123</a></li>
            </ul>
        </nav>
    );
}