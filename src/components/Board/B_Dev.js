import Title from "./B_Title";

import DEV_RIGHT from "../../assets/im/dev_right.svg";
import DEV_NEXT from "../../assets/im/dev_next.svg";
import DEV_PREV from "../../assets/im/dev_prev.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

let PAGE_NEXT;
export default function Dev() {
    const mytab = ["ALL", "程式", "美術", "企劃"];
    const APIs = JSON.parse(window.localStorage.getItem("ArticleAPI"));
    const [tab, settab] = useState(0);
    const [page, setpage] = useState(1);
    const Devs = [];
    const Devtop = [];
    const Devs_page = [];
    var nowpage = "";
    var scrollnum = 800;
    if (document.body.clientWidth <= 834) scrollnum = 600;
    else scrollnum = 800;
    useEffect(() => {
        console.log("成功加載")
        PAGE_NEXT = document.getElementById("page_next");
    }, []);

    const Dev = [{ contents: [], top: [] }, { contents: [], top: [] }, { contents: [], top: [] }, { contents: [], top: [] }];
    APIs.forEach((dev) => {
            for (let i = 0; i < mytab.length; i++) {
                if (dev.category === mytab[i] && dev.ispublish === true)
                    if (dev.ispin === false) Dev[i].contents.push(dev);
                    else Dev[i].top.push(dev);
            }
        }
    )
    APIs.forEach((dev) => {
            if (dev.ispublish === true)
                if (dev.ispin === false) Dev[0].contents.push(dev);
                else Dev[0].top.push(dev);
        }
    )
    for (let i = 0; i < Dev.length; i++) {
        for (let a = 0; a < Dev[i].contents.length; a++) {
            var len = 40;
            var mytext = Dev[i].contents[a].content;
            if (mytext.length > len) {
                var text = mytext.substring(0, len - 1) + "...";
                Dev[i].contents[a].content = text;
            }
        }
    }

    if (tab === 0) {
        //Top
        Devtop.push(Dev[tab].top[0]);
        //content
        for (let indexs = 0; indexs < Dev.length; indexs++) {
            Dev[indexs].contents.map(
                (devs) => Devs.push(devs)
            )
        }
        pagination(Dev[0].contents, page);
    } else {
        Dev[tab].top.map(
            (devs) => Devtop.push(devs)
        )
        Dev[tab].contents.map(
            (devs) => Devs.push(devs)
        )
        pagination(Dev[tab].contents, page);
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
        if (PAGE_NEXT != null) {
            if (currentPage === pageTotal) {
                PAGE_NEXT.classList.remove("showbox");
            }
            else if (currentPage > pageTotal) {
                setpage(currentPage - 1);
                currentPage = pageTotal;
            }
            else if (currentPage < pageTotal) {
                PAGE_NEXT.classList.add("showbox");
            }
        }
        //顯示數量
        var minData = (currentPage * perpage) - perpage;
        var maxData = (currentPage * perpage) - 1;
        if (maxData >= dataTotal) maxData = dataTotal - 1;
        for (let indexs = minData; indexs <= maxData; indexs++) {
            Devs_page.push(Devs[indexs]);
        }
    }
    const next = () => {
        nowpage = page;
        nowpage++;
        setpage(nowpage);
        window.scrollTo(0, document.getElementById("dev").offsetTop + scrollnum);
    }

    const pre = () => {
        nowpage = page;
        nowpage--;
        setpage(nowpage);
        window.scrollTo(0, document.getElementById("dev").offsetTop + scrollnum);
    }

    return (
        <div className="dev" id="dev">
            <Title Title_top="開發日誌" Title_bottom="DEV JOURNAL" ls="13px" lss="5px" />
            <div className="dev_tab">
                {mytab.map((dev, index) => (
                    <li key={index}>
                        <div className={tab === index ? "tab_title choose" : "tab_title"} onClick={() => { settab(index) }}>
                            {dev}
                        </div>
                    </li>
                ))}
            </div>
            {Devtop.map((dev) => (
                <div key={dev.id} className="top_box">
                    <img src={"https://acies-api.herokuapp.com/api/v1/article/file/"+dev.img} alt={dev.img} />
                    <div className="top_content">
                        <div className="content_title">{dev.title}</div>
                        <div className="content_text">{dev.content}</div>
                        <Link to={`/board/${dev.id}`} className="top_link">READ MORE</Link>
                    </div>
                    <img src={DEV_RIGHT} alt="DEV_RIGHT" />
                </div>
            ))}
            {Dev.map((dev, index) => (
                <div key={index} className={tab === index ? "dev_box showbox" : "dev_box"}>
                    {Devs_page.map(devs => (
                        <Link to={`/board/${devs.id}`} key={devs.id} className="content_box" style={{ background: "url(https://acies-api.herokuapp.com/api/v1/article/file/" + devs.img + ") no-repeat center top",borderRadius: "10px" }}>
                            <div className="mask"></div>
                            <div className="content">
                                <div className="content_title">{devs.title}</div>
                                <div className="content_text">{devs.content}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            ))}
            <div className="page_btn">
                <div id="page_prev" className={page > 1 ? "page_prev showbox" : "page_prev"} onClick={pre}>
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