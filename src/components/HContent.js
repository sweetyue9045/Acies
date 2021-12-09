import './HContent.css';
import { useContext, useEffect } from "react";

import Enter from './content/H_Enter';
import Feature from './content/H_Feature';
import Story from './content/H_Story';
import Tobbi from './content/H_Tobbi';
import Magic from './content/H_Magic';
import Ordeal from './content/H_Ordeal';
import Crisis from './content/H_Crisis';
import Awards from './content/H_Awards';
import Village from './content/H_Village';
import Sale from './content/H_Sale';

import { ScrollY } from '../pages/Home';;

var v_top = [];
export default function HContent() {
    const offsetY = useContext(ScrollY)
    const scrolltop = () => {
        v_top = [
            document.getElementById("feature").offsetTop + 1305,
            document.getElementById("story").offsetTop + 1305,
            document.getElementById("tobbi").offsetTop + 1305,
            document.getElementById("magic").offsetTop + 1305,
            document.getElementById("ordeal").offsetTop + 1305,
            document.getElementById("crisis").offsetTop + 1305,
            document.getElementById("awards").offsetTop + 1305,
            // document.getElementById("village").offsetTop,
            document.getElementById("sale").offsetTop + 1305,

        ];
    }
    // 抓取加動畫位置
    useEffect(() => {
        scrolltop();
    }, []);
    console.log(document.body.clientWidth)
    // 加動畫
    if (offsetY >= v_top[7] - 300 && offsetY <= v_top[7] + 10) {
        for (let i = 0; i < 4; i++) {
            setTimeout(function () {
                document.getElementById("sale").children[1].children[i].classList.add('fadein');
            }, 100 + i * 500);
        }
    }
    else if (offsetY >= v_top[6] - 300 && offsetY <= v_top[6] + 10) {
        for (let i = 0; i < 2; i++) {
            setTimeout(function () {
                document.getElementById("awards").children[0].children[i].classList.add('fadein');
            }, 100 + i * 500);
        }
    }
    else if (offsetY >= v_top[5] - 300 && offsetY <= v_top[5] + 10) {
        setTimeout(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementById("crisis").children[0].children[0].children[i].classList.add('fadein');
            }
        }, 100);
        setTimeout(function () {
            document.getElementById("crisis").children[0].children[1].classList.add('fadein');
        }, 600);
    }
    else if (offsetY >= v_top[4] - 300 && offsetY <= v_top[4] + 10) {
        setTimeout(function () {
            document.getElementById("ordeal").children[0].children[0].classList.add('fadein');
        }, 100);
        setTimeout(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementById("ordeal").children[0].children[1].children[i].classList.add('fadein');
            }
        }, 600);
    }
    else if (offsetY >= v_top[3] - 300 && offsetY <= v_top[3] + 10) {
        setTimeout(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementById("magic").children[0].children[0].children[i].classList.add('fadein');
            }
        }, 100);
        setTimeout(function () {
            document.getElementById("magic").children[0].children[1].classList.add('fadein');
        }, 600);
    }
    else if (offsetY >= v_top[2] - 300 && offsetY <= v_top[2] + 10) {
        setTimeout(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementById("tobbi").children[i].classList.add('fadein');
            }
        }, 100);
        for (let i = 2; i < 4; i++) {
            setTimeout(function () {
                document.getElementById("tobbi").children[i].classList.add('fadein');
            }, 100 + (i - 1) * 500);
        }
    }
    else if (offsetY >= v_top[1] - 300 && offsetY <= v_top[1] + 10) {
        setTimeout(function () {
            for (let i = 0; i < 2; i++) {
                document.getElementById("story").children[0].children[0].children[i].classList.add('fadein');
            }
        }, 100);
        setTimeout(function () {
            document.getElementById("story").children[0].children[0].children[3].classList.add('fadein');
        }, 500);
        setTimeout(function () {
            document.getElementById("story").children[0].children[1].classList.add('fadein');
        }, 1100);
    }
    else if (offsetY >= v_top[0] - 300 && offsetY <= v_top[0] + 10) {
        for (let i = 0; i < 4; i++) {
            setTimeout(function () {
                document.getElementById("feature").children[i].classList.add('fadein');
            }, 100 + i * 500);
        }
    }
    // else if (offsetY >= v_top[1] - 300 && offsetY <= v_top[1] + 10) {
    //     for (let i = 0; i < 3; i++) {
    //         document.getElementById("v_hr" + i).classList.add('fadein');
    //     }
    //     setTimeout(function () {
    //         document.getElementById('v_mossina').classList.add('fadein');
    //     }, 500);
    //     setTimeout(function () {
    //         document.getElementById('v_scale').classList.add('fadein');
    //     }, 1000);
    //     setTimeout(function () {
    //         document.getElementById('v_afeite').classList.add('fadein');
    //     }, 1500);
    //     setTimeout(function () {
    //         document.getElementById('v_tama').classList.add('fadein');
    //     }, 2000);
    // }
    return (
        <div className="Home">
            <Enter />
            <Feature />
            <Story />
            <Tobbi />
            <Magic />
            <Ordeal />
            <Crisis />
            <Awards />
            {/* <Village /> */}
            <Sale />
        </div>
    );
}
