import "../AContent.css";

import { Link } from "react-router-dom";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

export default function All({ props }) {
    const APIs = JSON.parse(window.localStorage.getItem("ArticleAPI"))
    const handleDeleteMessage = (e, id) => {
        e.stopPropagation();
        e.preventDefault();

        props(true, id)
    };
    const handlePublishMessage = (e, id) => {
        e.stopPropagation();
        e.preventDefault();
        const articles = {
            "ispublish": true
        };
        fetch(`${URL}/id/${id}/publish`, {
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
                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="All">
            <Link to="/add" className="add_link">
                <div className="add_btn">
                    <span className="imgsvg"></span>
                    <span className="imgtext">新增文章</span>
                </div>
            </Link>
            <div className="article">
                {APIs.map((data, index) => (
                    <Link to={`/edit/${data.id}`} key={data.id}>
                        <div className="indi_arti">
                            <div className="indi_left">
                                <div className="indi_title">{data.title}</div>
                                <div className="indi_category">#{data.category}</div>
                                <div className="indi_pin" style={{ backgroundColor: data.ispin ? "#000" : "#9E9E9E" }}></div>
                                <div className="indi_del" onClick={(e) => { handleDeleteMessage(e, data.id); }}></div>
                            </div>
                            <div className="indi_publish" onClick={(e) => { handlePublishMessage(e, data.id); }} style={{ backgroundColor: data.ispublish ? "#9E9E9E" : "#000" }}>{data.ispublish ? "已發佈" : "發佈"}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}