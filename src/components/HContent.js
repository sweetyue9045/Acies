import './HContent.css';
import { useContext, useEffect } from "react";

import Enter from './content/H_Enter';
import Feature from './content/H_Feature';
import Story from './content/H_Story';
import Tobbi from './content/H_Tobbi';
import Village from './content/H_Village';
import Sale from './content/H_Sale';

import { ScrollY } from '../pages/Home';;

var v_top = [];
export default function HContent() {
    const offsetY = useContext(ScrollY)
    const scrolltop = () => {
        v_top = [
            document.getElementById("feature").offsetTop,
            document.getElementById("village").offsetTop,
            document.getElementById("sale").offsetTop
        ];
    }
    console.log(offsetY)
    // 抓取加動畫位置
    useEffect(() => {
        scrolltop();
    }, []);

    // 加動畫
    if (offsetY >= v_top[2] - 300 && offsetY <= v_top[2] + 10) {
        for (let i = 0; i < 5; i++) {
            setTimeout(function () {
                document.getElementById("sale").children[1].children[i].classList.add('fadein');
            }, 100+i*500);
        }
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
    else if (offsetY >= v_top[0] - 300 && offsetY <= v_top[0] + 10) {
        for (let i = 0; i < 4; i++) {
            setTimeout(function () {
                document.getElementById("feature").children[i].classList.add('fadein');
            }, 100+i*500);
        }
    }
    return (
        <div className="Home">
            <Enter />
            <Feature />
            <Story />
            <Tobbi />
            <Village />
            <Sale />
        </div>
    );
}
