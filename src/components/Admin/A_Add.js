import "../AContent.css";
import Title from "../Home/H_Title";

import IMG_PLUS from "../../assets/im/add_plus.svg";
import IMG_CROSS from "../../assets/im/add_cross.svg";

import axios from "axios";
import { useState, useContext } from "react";
import { StoreContext } from "../../store";

const URL = "https://acies-api.herokuapp.com/api/v1/article";

export default function Add() {
    const { state: { userSignin: { userInfo } } } = useContext(StoreContext);
    const [title, settitle] = useState("");
    const [img, setimg] = useState("新增封面圖片");
    const [imgwidth, setimgwidth] = useState(240);
    const [content, setcontent] = useState("");
    const [category, setcategory] = useState("");
    const [loading, setloading] = useState(false)
    const style = {};
    var Today = new Date();

    if (img === "新增封面圖片") style.WebkitMaskImage = style.maskImage = `url(${IMG_PLUS})`;
    else style.WebkitMaskImage = style.maskImage = `url(${IMG_CROSS})`;

    const handlePostMessage = async () => {
        if (title === "") {
            window.scrollTo(0, document.getElementById("title").offsetTop + 200);
            setTimeout(function () {
                alert("請填入標題");
            }, 100);
        }
        else if (img === "新增封面圖片") {
            window.scrollTo(0, document.getElementById("img").offsetTop + 200);
            setTimeout(function () {
                alert("請選擇圖片");
            }, 100);
        }
        else if (content === "") {
            window.scrollTo(0, document.getElementById("content").offsetTop + 200);
            setTimeout(function () {
                alert("請填入內文");
            }, 100);
        }
        else if (category === "") {
            window.scrollTo(0, document.getElementById("form_bottom").offsetTop + 200);
            setTimeout(function () {
                alert("請選擇分類");
            }, 100);
        }

        const articles = {
            category: category,
            img: img.name,
            title: title,
            content: content,
            writer:
                userInfo
                    ? `${userInfo.username}`
                    : `是誰`,
            write_time: Today.getFullYear() + "." + (Today.getMonth() + 1) + "." + Today.getDate(),
            editer: "",
            edit_time: "",
            ispublish: false,
            ispin: false
        };

        if (title !== "" && img !== "新增封面圖片" && content !== "" && category !== "") {
            setloading(true)
            let formData = new FormData();
            formData.append("files", img)
            axios({
                method: "post",
                url: `${URL}/upload/`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            fetch(`${URL}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(articles)
            })
                .then((res) => res.json())
                .then(() => {
                    fetch(`${URL}/all`)
                        .then((res) => res.json())
                        .then((data) => {
                            const APIs = JSON.stringify(data.reverse());
                            window.localStorage.setItem("ArticleAPI", APIs);
                        })
                    setTimeout(() => {
                        window.location = "/admin/list"
                    }, 1000);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    return (
        <div className="Add">
            <Title Title="新增文章" />
            <form id="articlelist">
                <input id="title" placeholder="請輸入標題" onChange={(event) => settitle(event.target.value)} maxLength="10" required />

                <input className="input-file" id="input-file" type="file" accept="image/jpeg,image/png,image/gif"
                    onChange={(event) => {
                        setimg(event.target.files[0]);
                        setTimeout(function () {
                            setimgwidth(document.getElementById("imgtext").clientWidth + 42);
                        }, 200);
                        console.log(event.target.files)
                    }} required />
                <label id="img" htmlFor="input-file" style={{ width: `${imgwidth}px` }}>
                    <span className="imgsvg" style={style}></span>
                    {img == "新增封面圖片" ? (
                        <span className="imgtext" id="imgtext">{img}</span>
                    ) : (
                        <span className="imgtext" id="imgtext">{img.name}</span>
                    )}
                </label>
                <textarea id="content" placeholder="開始填寫內容" onChange={(event) => setcontent(event.target.value)} required />
                <div className="form_bottom" id="form_bottom">
                    <div id="category">
                        <input name="category_list" id="category_01" type="radio" value="程式" onChange={(event) => setcategory(event.target.value)} required />
                        <label className="categorytext" htmlFor="category_01">#程式</label>
                        <input name="category_list" id="category_02" type="radio" value="美術" onChange={(event) => setcategory(event.target.value)} />
                        <label className="categorytext" htmlFor="category_02">#美術</label>
                        <input name="category_list" id="category_03" type="radio" value="企劃" onChange={(event) => setcategory(event.target.value)} />
                        <label className="categorytext" htmlFor="category_03">#企劃</label>
                    </div>
                    {loading ?
                        <div className="sub_btn sub_btn_loading">
                            <div className="loader"></div>
                        </div>
                        :
                        <div className="sub_btn" onClick={() => { handlePostMessage(); }}>儲存</div>
                    }
                </div>
            </form>
        </div>
    );
}