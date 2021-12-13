import './GContent.css';
import { useContext, useEffect } from "react";

import World from './Game/G_World';
import Village from './Game/G_Village';
import Sister from './Game/G_Sister';

import { ScrollY } from '../pages/Game';

var g_top = [];
export default function GContent() {
    const offsetY = useContext(ScrollY)

    const scrolltop = () => {
        g_top = [
            document.getElementById("world").offsetTop,
            document.getElementById("village").offsetTop,
            document.getElementById("sister").offsetTop
        ];
        console.log(g_top)

    }
    // 抓取加動畫位置
    useEffect(() => {
        if (document.body.clientWidth > 834) {
            scrolltop();
        }
    }, []);
    if (g_top !== []) {
        if (offsetY >= g_top[2] -100&& offsetY <= g_top[2] + 10) {
            setTimeout(function () {
                document.getElementById('sister').children[1].children[0].classList.add('fadein');
            }, 100);
            setTimeout(function () {
                document.getElementById('sister').children[1].children[1].classList.add('fadein');
            }, 600);
        }
        else if (offsetY >= g_top[1] - 300 && offsetY <= g_top[1] + 10) {
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
        else if (offsetY >= g_top[0] && offsetY <= g_top[0] + 10) {
            document.getElementById('world').children[1].classList.add('fadein');
            setTimeout(function () {
                document.getElementById('world').children[2].classList.add('fadein');
            }, 500);
        }


    }
    return (
        <div className="Game">
            <World />
            <Village />
            <Sister />
        </div>
    );
}