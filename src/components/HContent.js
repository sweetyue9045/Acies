import './HContent.css';

import Feature from './content/H_Feature';
import Sister from './content/H_Sister';
import Video from './content/H_Video';
import Skill from './content/H_Skill';
import Village from './content/H_Village';
import Scene from './content/H_Scene';
import Sale from './content/H_Sale';

import { useState, useEffect } from "react";

var v_top = [];
export default function HContent() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => {
        setOffsetY(document.documentElement.scrollTop);
    }
    const scrolltop = () => {
        v_top = [document.getElementById("village").offsetTop, document.getElementById("sale").offsetTop];
    }
    // 監聽滾動
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll, true);
    }, []);

    // 抓取加動畫位置
    useEffect(() => {
        console.log("成功加載")
        scrolltop();
    }, []);

    // 加動畫
    if (offsetY >= v_top[1] - 300 && offsetY <= v_top[1] + 10) {
        document.getElementById('s_year').classList.add('fadein');
        setTimeout(function () {
            document.getElementById('s_date').classList.add('fadein');
        }, 500);
        setTimeout(function () {
            document.getElementById('s_ch').classList.add('fadein');
            document.getElementById('s_en').classList.add('fadein');
        }, 1000);
        setTimeout(function () {
            document.getElementById('s_platform').classList.add('fadein');
        }, 1500);
    } else if (offsetY >= v_top[0] - 300 && offsetY <= v_top[0] + 10) {
        for (let i = 0; i < 3; i++) {
            document.getElementById("v_hr" + i).classList.add('fadein');
        }
        setTimeout(function () {
            document.getElementById('v_mossina').classList.add('fadein');
        }, 500);
        setTimeout(function () {
            document.getElementById('v_scale').classList.add('fadein');
        }, 1000);
        setTimeout(function () {
            document.getElementById('v_afeite').classList.add('fadein');
        }, 1500);
        setTimeout(function () {
            document.getElementById('v_tama').classList.add('fadein');
        }, 2000);
    }

    return (
        <div className="Home">
            <Feature />
            <Sister />
            <Video />
            <hr />
            <Skill />
            <Village />
            <Scene />
            <Sale />
        </div>
    );
}
