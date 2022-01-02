import "../AContent.css";

import { Link } from "react-router-dom";

const URL = "https://test-1129.herokuapp.com/api/v1/article";

export default function All({ del , publish}) {
    const APIs = JSON.parse(window.localStorage.getItem("ArticleAPI"))
    console.log(APIs)

    const handleDeleteMessage = (e, id , img) => {
        e.stopPropagation();
        e.preventDefault();

        del(true, id ,img)
    };
    const handlePublishMessage = (e, id) => {
        e.stopPropagation();
        e.preventDefault();

        publish(true, id)
    };
    return (
        <div className="All">
            <Link to="/admin/add" className="add_link">
                <div className="add_btn">
                    <span className="imgsvg"></span>
                    <span className="imgtext">新增文章</span>
                </div>
            </Link>
            <div className="article">
                {APIs.map((data, index) => (
                    <Link to={`/admin/edit/${data.id}`} key={data.id}>
                        <div className="indi_arti">
                            <div className="indi_left">
                                <div className="indi_title">{data.title}</div>
                                <div className="indi_category">#{data.category}</div>
                                <div className="indi_pin" style={{ backgroundColor: data.ispin ? "#000" : "#9E9E9E" }}></div>
                                <div className="indi_del" onClick={(e) => { handleDeleteMessage(e, data.id , data.img); }}></div>
                            </div>
                            {data.ispublish ? (
                                <div className="indi_publish" style={{ backgroundColor: "#9E9E9E"}}>已發佈</div>
                            ) : (
                                <div className="indi_publish" onClick={(e) => { handlePublishMessage(e, data.id); }} style={{ backgroundColor: "#000"}}>發佈</div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}