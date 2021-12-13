import './HContent.css';
import Enter from './Home/H_Enter';
import Feature from './Home/H_Feature';
import Story from './Home/H_Story';
import Tobbi from './Home/H_Tobbi';
import Magic from './Home/H_Magic';
import Ordeal from './Home/H_Ordeal';
import Crisis from './Home/H_Crisis';
import Awards from './Home/H_Awards';
import Sale from './Home/H_Sale';

import { useContext, useEffect } from "react";
import { ScrollY } from '../pages/Home';

var h_top = [];
export default function HContent() {
    const offsetY = useContext(ScrollY)
    const scrolltop = () => {
        h_top = [
            document.getElementById("feature").offsetTop + 1305,
            document.getElementById("story").offsetTop + 1305,
            document.getElementById("tobbi").offsetTop + 1305,
            document.getElementById("magic").offsetTop + 1305,
            document.getElementById("ordeal").offsetTop + 1305,
            document.getElementById("crisis").offsetTop + 1305,
            document.getElementById("awards").offsetTop + 1305,
            document.getElementById("sale").offsetTop + 1305,
        ];
    }
    // 抓取加動畫位置
    useEffect(() => {
        if (document.body.clientWidth > 834) {
            scrolltop();
        }
    }, []);
    // 加動畫
    if (document.body.clientWidth > 834) {
        if (offsetY >= h_top[7] - 300 && offsetY <= h_top[7] + 10) {
            for (let i = 0; i < 4; i++) {
                setTimeout(function () {
                    document.getElementById("sale").children[1].children[i].classList.add('fadein');
                }, 100 + i * 500);
            }
        }
        else if (offsetY >= h_top[6] - 300 && offsetY <= h_top[6] + 10) {
            for (let i = 0; i < 2; i++) {
                setTimeout(function () {
                    document.getElementById("awards").children[0].children[i].classList.add('fadein');
                }, 100 + i * 500);
            }
        }
        else if (offsetY >= h_top[5] - 300 && offsetY <= h_top[5] + 10) {
            setTimeout(function () {
                for (let i = 0; i < 2; i++) {
                    document.getElementById("crisis").children[0].children[0].children[i].classList.add('fadein');
                }
            }, 100);
            setTimeout(function () {
                document.getElementById("crisis").children[0].children[1].classList.add('fadein');
            }, 600);
        }
        else if (offsetY >= h_top[4] - 300 && offsetY <= h_top[4] + 10) {
            setTimeout(function () {
                document.getElementById("ordeal").children[0].children[0].classList.add('fadein');
            }, 100);
            setTimeout(function () {
                for (let i = 0; i < 2; i++) {
                    document.getElementById("ordeal").children[0].children[1].children[i].classList.add('fadein');
                }
            }, 600);
        }
        else if (offsetY >= h_top[3] - 300 && offsetY <= h_top[3] + 10) {
            setTimeout(function () {
                for (let i = 0; i < 2; i++) {
                    document.getElementById("magic").children[0].children[0].children[i].classList.add('fadein');
                }
            }, 100);
            setTimeout(function () {
                document.getElementById("magic").children[0].children[1].classList.add('fadein');
            }, 600);
        }
        else if (offsetY >= h_top[2] - 300 && offsetY <= h_top[2] + 10) {
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
        else if (offsetY >= h_top[1] - 300 && offsetY <= h_top[1] + 10) {
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
        else if (offsetY >= h_top[0] - 300 && offsetY <= h_top[0] + 10) {
            for (let i = 0; i < 4; i++) {
                setTimeout(function () {
                    document.getElementById("feature").children[i].classList.add('fadein');
                }, 100 + i * 500);
            }
        }
    }

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
            <Sale />
        </div>
    );
}
