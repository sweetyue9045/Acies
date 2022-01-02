import Nav from "../components/A_Nav";
import All from "../components/Admin/A_All";
import Footer from "../components/Footer";

import axios from "axios";
import { useState } from "react";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

function AllArticle() {
    const [confirm_del, setConfirm_del] = useState(false);
    const [confirm_publish, setConfirm_publish] = useState(false);
    const [ID, setID] = useState();
    const [IMG, setIMG] = useState();
    const [loading, setloading] = useState(false)
    const Confirm_del = (open, id, img) => {
        setConfirm_del(open)
        setID(id)
        setIMG(img)
        document.getElementById("confirm_del").classList.add('show-open')
    }
    const Confirm_publish = (open, id) => {
        setConfirm_publish(open)
        setID(id)
        document.getElementById("confirm_publish").classList.add('show-open')
    }
    const confirm_del_yes = async () => {
        setloading(true)
        axios({
            method: "DELETE",
            url: `${URL}/delete/file/${IMG}`,
            data: IMG,
            headers: { "Content-Type": "multipart/form-data" },
        })
        fetch(`${URL}/id/${ID}/delete`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })
            .then((res) => res.json())
            .then(() => {
                document.body.classList.remove('show-open')
                const API = JSON.parse(window.localStorage.getItem("ArticleAPI"))
                const DEL = API.find(
                    (x) => x.id === ID
                );
                API.splice(API.indexOf(DEL), 1)
                const APIs = JSON.stringify(API)
                window.localStorage.setItem("ArticleAPI", APIs)
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    const confirm_publish_yes = async () => {
        setloading(true)
        const articles = {
            "ispublish": true
        };
        fetch(`${URL}/id/${ID}/publish`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(articles)
        })
            .then((res) => res.json())
            .then(() => {
                fetch(`${URL}/all`)
                    .then((res) => res.json())
                    .then((data) => {
                        const API = JSON.stringify(data.reverse());
                        window.localStorage.setItem("ArticleAPI", API);
                    })
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Nav />
            <All del={Confirm_del.bind(this)} publish={Confirm_publish.bind(this)} />
            <Footer />
            <div className="confirm" id="confirm_del" style={confirm_del ? { diplay: "flex" } : { display: "none" }}>
                <div className="confirm_box">
                    <div className="confirm_title">確定刪除嗎</div>
                    <div className="btn_group">
                        <div className="btn btn_no" onClick={() => { setConfirm_del(false); document.getElementById("confirm_del").classList.remove('show-open'); }}>取消</div>
                        {loading ?
                            <div className="btn btn_loading">loading</div>
                            :
                            <div className="btn btn_yes" onClick={() => { confirm_del_yes() }}>確定</div>
                        }

                    </div>
                </div>
            </div>
            <div className="confirm" id="confirm_publish" style={confirm_publish ? { diplay: "flex" } : { display: "none" }}>
                <div className="confirm_box">
                    <div className="confirm_title">確定發佈嗎</div>
                    <div className="btn_group">
                        <div className="btn btn_no" onClick={() => { setConfirm_publish(false); document.getElementById("confirm_publish").classList.remove('show-open'); }}>取消</div>
                        {loading ?
                            <div className="btn btn_loading">loading</div>
                            :
                            <div className="btn btn_yes" onClick={() => { confirm_publish_yes() }}>確定</div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllArticle;