import './GContent.css';
import { useContext, useEffect } from "react";

import World from './content/G_World';
import Village from './content/G_Village';
import Sister from './content/G_Sister';

import { ScrollY } from '../pages/Game';

var v_top = [];
export default function GContent() {
    const offsetY = useContext(ScrollY)

    const scrolltop = () => {
        v_top = [
            document.getElementById("world").offsetTop,
            document.getElementById("village").offsetTop,
            document.getElementById("sister").offsetTop

        ];
    }
    // 抓取加動畫位置
    useEffect(() => {
        scrolltop();
    }, []);
    if (offsetY >= v_top[0] - 300 && offsetY <= v_top[0] + 10) {
        document.getElementById('world').children[1].classList.add('fadein');
        setTimeout(function () {
            document.getElementById('world').children[2].classList.add('fadein');
        }, 500);
    }
    else if (offsetY >= v_top[1] - 300 && offsetY <= v_top[1] + 10) {
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
    else if (offsetY >= v_top[2] - 300 && offsetY <= v_top[2] + 10) {
        setTimeout(function () {
            document.getElementById('sister').children[1].children[0].classList.add('fadein');
        }, 100);
        setTimeout(function () {
            document.getElementById('sister').children[1].children[1].classList.add('fadein');
        }, 600);
    }
    return (
        <div className="Game">
            <World />
            <Village />
            <Sister />
        </div>
    );
}