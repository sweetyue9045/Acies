import "../AContent.css";
import Title from "../Home/H_Title";

import IMG_CROSS from "../../assets/im/add_cross.svg";

import axios from "axios";
import { useState, useEffect } from "react";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

export default function Edit({ article }) {
    const [title, settitle] = useState("")
    const [img, setimg] = useState("新增封面圖片")
    const [content, setcontent] = useState("")
    const [category, setcategory] = useState("")
    const [imgwidth, setimgwidth] = useState(240)
    const [loading, setloading] = useState(false)
    var Today = new Date();

    const editMessages = () => {

        document.getElementById("title").value = article.title
        document.getElementById("content").value = article.content
        var radionum = document.getElementById("articlelist").category_list
        for (var i = 0; i < radionum.length; i++) {
            if (radionum[i].value === article.category) {
                radionum[i].checked = true;
            }
        }
        setimg(article.img)
        settitle(article.title)
        setcontent(article.content)
        setcategory(article.category)
        setTimeout(function () {
            setimgwidth(document.getElementById("imgtext").clientWidth + 42)
        }, 100);
    }

    useEffect(() => {
        editMessages()
    }, []);

    const handlePutMessage = async(id) => {
        if (title === "") {
            window.scrollTo(0, document.getElementById("title").offsetTop + 200);
            setTimeout(function () {
                alert("請填入標題")
            }, 100);
        }
        else if (img === "新增封面圖片") {
            window.scrollTo(0, document.getElementById("img").offsetTop + 200);
            setTimeout(function () {
                alert("請選擇圖片")
            }, 100);
        }
        else if (content === "") {
            window.scrollTo(0, document.getElementById("content").offsetTop + 200);
            setTimeout(function () {
                alert("請填入內文")
            }, 100);
        }
        else if (category === "") {
            window.scrollTo(0, document.getElementById("form_bottom").offsetTop + 200);
            setTimeout(function () {
                alert("請選擇分類")
            }, 100);
        }
        const articles = {
            category: category,
            img: img.name,
            title: title,
            content: content,
            editer: "欣",
            edit_time: Today.getFullYear() + "." + (Today.getMonth() + 1) + "." + Today.getDate(),
            id: id
        };
        if (title !== "" && img !== "新增封面圖片" && content !== "" && category !== "") {
            setloading(true)
            axios({
                method: "DELETE",
                url: `${URL}/delete/file/${article.img}`,
                data: article.img,
                headers: { "Content-Type": "multipart/form-data" },
            })
            let formData = new FormData();
            formData.append("files", img)
            axios({
                method: "post",
                url: `${URL}/upload/`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            fetch(`${URL}/id/${id}/update`, {
                method: "PUT",
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
    };
    return (
        <div className="Edit">
            <Title Title="編輯文章" />
            <form id="articlelist">
                <input id="title" type="text" placeholder="請輸入標題" onChange={(event) => settitle(event.target.value)} maxLength="10" />
                <input className="input-file" id="input-file" type="file" accept="image/jpeg,image/png,image/gif"
                    onChange={(event) => {
                        setimg(event.target.files[0]);
                        setimgwidth(document.getElementById("imgtext").clientWidth + 42);
                    }} />
                <label id="img" htmlFor="input-file" style={{ width: `${imgwidth}px` }}>
                    <span className="imgsvg" style={{
                        WebkitMaskImage: `url(${IMG_CROSS})`,
                        maskImage: `url(${IMG_CROSS})`
                    }}></span>
                    {img == article.img ? (
                        <span className="imgtext" id="imgtext">{img}</span>
                    ) : (
                        <span className="imgtext" id="imgtext">{img.name}</span>
                    )}
                </label>
                <textarea id="content" placeholder="開始填寫內容" onChange={(event) => setcontent(event.target.value)} />
                <div className="form_bottom">
                    <div id="category">
                        <input name="category_list" id="category_01" type="radio" value="程式" onChange={(event) => setcategory(event.target.value)} />
                        <label className="categorytext" htmlFor="category_01">#程式</label>
                        <input name="category_list" id="category_02" type="radio" value="美術" onChange={(event) => setcategory(event.target.value)} />
                        <label className="categorytext" htmlFor="category_02">#美術</label>
                        <input name="category_list" id="category_03" type="radio" value="企劃" onChange={(event) => setcategory(event.target.value)} />
                        <label className="categorytext" htmlFor="category_03">#企劃</label>
                    </div>
                    {loading ?
                        <input type="button" value="loading" className="sub_btn sub_btn_loading" disabled />
                        :
                        <input type="button" value="儲存" className="sub_btn" onClick={() => { handlePutMessage(article.id) }} />
                    }
                </div>
            </form>
        </div>
    );
}