import Title from "./H_Title";

import "../AContent.css";
import IMG_PLUS from "../../assets/im/edit_plus.svg";
import IMG_CROSS from "../../assets/im/edit_cross.svg";

import { useState, useEffect } from 'react';


export default function Edit() {
    const [category, setcategory] = useState('')
    const [img, setimg] = useState('新增封面圖片')
    const [title, settitle] = useState('')
    const [content, setcontent] = useState('')
    const [APIs, setAPIs] = useState([]);
    const [Edit, setEdit] = useState([])
    const style = {}

    if (img == "新增封面圖片") style.WebkitMaskImage = style.maskImage = `url(${IMG_PLUS})`
    else style.WebkitMaskImage = style.maskImage = `url(${IMG_CROSS})`

    return (
        <div className="Edit">
            <Title Title="新增文章" />
            <form id="articlelist">
                <input id="title" placeholder="請輸入標題" onChange={(event) => settitle(event.target.value)} maxLength="10" required />
                <label id="img">
                    <input class="input-file" type="file" accept="image/jpeg,image/png,image/gif"
                        onChange={(event) => setimg(event.target.files[0].name)} required />
                    <span className="img_btn">
                        <span className="imgsvg" style={style}></span>
                        <span className="imgtext">{img}</span>
                    </span>
                </label>
                <textarea id="content" placeholder="開始填寫內容" onChange={(event) => setcontent(event.target.value)} required />
                <div className="form_bottom">
                <div id="category">
                    <input name="category_list" id="category_01" type="radio" value="程式" onChange={(event) => setcategory(event.target.value)} required />
                    <label className="categorytext" for="category_01">#程式</label>
                    <input name="category_list" id="category_02" type="radio" value="美術" onChange={(event) => setcategory(event.target.value)} />
                    <label className="categorytext" for="category_02">#美術</label>
                    <input name="category_list" id="category_03" type="radio" value="企劃" onChange={(event) => setcategory(event.target.value)} />
                    <label className="categorytext" for="category_03">#企劃</label>
                </div>
                <input type="submit" value="儲存" className="sub_btn"/>
                </div>
            </form>
        </div>
    );
}