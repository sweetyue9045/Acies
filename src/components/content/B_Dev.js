import Title from "./B_Title";

import Tab from "./B_Dev_Tab";
import Block from "./B_Dev_block";

import dev from "../../assets/json/dev.json"

import { useState} from 'react';

export default function Dev() {
    const [tab, settab] = useState(0);

    return (
        <>
            <div className="dev">
                <Title Title_top="開發日誌" Title_bottom="DEV JOURNAL" ls="13px" />
                <div className="dev_tab">
                    {dev.map((dev, index) => (
                        <Tab key={dev.key} dev={dev} isActive={tab === index} indexPlus={() => { settab(index); }} />
                    ))}
                </div>
                {dev.map((dev, index) => (
                        <Block key={dev.key} index={index} isActive={tab === index} />
                    ))}
            </div>
        </>
    );
}