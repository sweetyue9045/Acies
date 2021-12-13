import Nav from "../components/A_Nav"
import All from "../components/Admin/A_All"
import Footer from "../components/Footer"

import { useState } from "react";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

function AllArticle() {
    const [confirm, setConfirm] = useState(false);
    const [ID, setID] = useState();

    const Confirm = (open, id) => {
        setConfirm(open)
        setID(id)
        document.body.classList.add('show-open')
    }
    const confirm_yes = () => {
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


    return (
        <>
            <Nav />
            <All props={Confirm.bind(this)} />
            <Footer />
            <div className="confirm" style={confirm ? { diplay: "flex" } : { display: "none" }}>
                <div className="confirm_box">
                    <div className="confirm_title">確定刪除嗎</div>
                    <div className="btn_group">
                        <div className="btn btn_no" onClick={() => { setConfirm(false); document.body.classList.remove('show-open'); }}>取消</div>
                        <div className="btn btn_yes" onClick={() => { confirm_yes() }}>確定</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AllArticle;