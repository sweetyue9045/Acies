import Title from "./B_Title";

import NEWS_BOTTOM from "../../assets/im/news_bottom.svg"

import Carousel from "./B_Carousel";
import Carousel_dot from "./B_Carousel_dot";
import news from "../../assets/json/news.json"
import { useState, useEffect } from 'react';

var n = 0;
export default function News() {
    const [tab, settab] = useState(0);
    useEffect(() => {
        setInterval(timer, 5000);
    }, []);

    var timer = () => {
        n++;
        if (n >= 3) n = 0
        settab(n);
    }

    var click = (index) => {
        n = index;
    }
    return (
        <>
            <div className="news">
                <div className="n_left">
                    <Title Title_top="最新消息" Title_bottom="BREAKING NEWS" ls="9.5px" />
                    <div className="logo">
                        <div className="text">ACIES</div>
                        <div className="text">TWIN JOURNEY</div>
                        <img src={NEWS_BOTTOM} />
                    </div>
                </div>
                <div className="n_right">
                    {news.map((news, index) => (
                        <Carousel key={news.key} news={news} isActive={tab === index} />
                    ))}
                    <div className="dot_block">
                        {news.map((news, index) => (
                            <div key={news.key} className={tab === index ? 'carousel_dot choose' : 'carousel_dot'}
                                onClick={() => {
                                    settab(index); click(index);
                                }}>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}