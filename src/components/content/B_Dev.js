import Title from "./B_Title";

import dev from "../../assets/json/dev.json"

import DEV_RIGHT from "../../assets/im/dev_right.svg"
import DEV_NEXT from "../../assets/im/dev_next.svg"
import DEV_PREV from "../../assets/im/dev_prev.svg"

import { useState } from 'react';

var flag = 0;
export default function Dev() {
    const [tab, settab] = useState(0);
    const [page, setpage] = useState(1);
    const Devs = [];
    const DevTs = [];
    const Devtop = [];
    const Devs_page = [];
    var nowpage = "";

    if (dev[tab].name === "ALL") {
        //Top
        const DevT = dev.map(
            (devs) => devs.top
        )
        for (let indexs = 0; indexs < DevT.length; indexs++) {
            DevT[indexs].map(
                (devs) => DevTs.push(devs)
            )
        }
        Devtop.push(DevTs[0])
        //content
        const Dev = dev.map(
            (devs) => devs.contents
        )
        for (let indexs = 0; indexs < Dev.length; indexs++) {
            Dev[indexs].map(
                (devs) => Devs.push(devs)
            )
        }
        pagination(Devs, page)
    } else {
        dev[tab].top.map(
            (devs) => Devtop.push(devs)
        )
        dev[tab].contents.map(
            (devs) => Devs.push(devs)
        )
        pagination(Devs, page)
    }

    function pagination(jsonData, nowPage) {
        // 資料長度
        const dataTotal = jsonData.length;
        // 數量
        const perpage = 4;
        // page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
        const pageTotal = Math.ceil(dataTotal / perpage);
        // 當前頁數，對應現在當前頁數
        let currentPage = nowPage;

        if (currentPage === pageTotal) {
            document.getElementById('page_next').classList.remove("showbox")
        }
        else if (currentPage > pageTotal) {
            setpage(currentPage - 1)
            currentPage = pageTotal;
        }
        else if (flag === 1 && currentPage < pageTotal) {
            document.getElementById('page_next').classList.add("showbox")
        }
        //顯示數量
        var minData = (currentPage * perpage) - perpage;
        var maxData = (currentPage * perpage) - 1;
        if (maxData >= dataTotal) maxData = dataTotal - 1;
        for (let indexs = minData; indexs <= maxData; indexs++) {
            Devs_page.push(Devs[indexs])
        }
    }
    const next = () => {
        nowpage = page;
        nowpage++;
        setpage(nowpage);
        flag = 1;
        window.scrollTo(0, document.getElementById('dev').offsetTop + 900);
    }

    const pre = () => {
        nowpage = page;
        nowpage--;
        setpage(nowpage);
        window.scrollTo(0, document.getElementById('dev').offsetTop + 900);
    }


    return (
        <div className="dev" id="dev">
            <Title Title_top="開發日誌" Title_bottom="DEV JOURNAL" ls="13px" />
            <div className="dev_tab">
                {dev.map((dev, index) => (
                    <li key={dev.key}>
                        <a className={tab === index ? 'tab_title choose' : 'tab_title'} href={dev.a} target="_blank" onClick={() => { settab(index) }}>
                            {dev.name}
                        </a>
                    </li>
                ))}
            </div>
            {Devtop.map((dev) => (
                <div key={dev.id} className="top_box">
                    <img src={dev.im} alt={dev.im}/>
                    <div className="top_content">
                        <div className="content_title">{dev.title}</div>
                        <div className="content_text">{dev.content}</div>
                        <a className="top_link" href={dev.a} target="_blank">READ MORE</a>
                    </div>
                    <img src={DEV_RIGHT} alt="DEV_RIGHT" />
                </div>
            ))}
            {dev.map((dev, index) => (
                <div key={dev.key} className={tab === index ? 'dev_box showbox' : 'dev_box'}>
                    {Devs_page.map(devs => (
                        <a key={devs.id} className="content_box" href={devs.a} target="_blank" style={{ background: "url(" + devs.im + ") no-repeat center top" }}>
                            <div className="mask"></div>
                            <div className="content">
                                <div className="content_title">{devs.title}</div>
                                <div className="content_text">{devs.content}</div>
                            </div>
                        </a>
                    ))}
                </div>
            ))}
            <div className="page_btn">
                <div id="page_prev" className={page > 1 ? 'page_prev showbox' : 'page_prev'} onClick={pre}>
                    <img src={DEV_PREV} alt="DEV_PREV" />
                    <p>PREV</p>
                </div>
                <div id="page_next" className="page_next showbox" onClick={next}>
                    <p>NEXT</p>
                    <img src={DEV_NEXT} alt="DEV_NEXT" />
                </div>
            </div>
        </div>
    );
}