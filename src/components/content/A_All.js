
import "../AContent.css";

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API } from "../../App";

export default function All({ props }) {
    const APIs = useContext(API)

    const handleDeleteMessage = (e,id) => {
        e.stopPropagation();
        e.preventDefault();

        props(true, id)
    };
    return (
        <div className="All">
            <Link to="/add">
                <div className="add_btn">
                    <span className="imgsvg"></span>
                    <span className="imgtext">新增文章</span>
                </div>
            </Link>
            <div className="article">
                {APIs.map((data, index) => (
                    <Link to={`/article/${data.id}`} key={data.id}>
                        <div className="indi_arti">
                            <div className="indi_left">
                                <div className="indi_title">{data.title}</div>
                                <div className="indi_category">#{data.category}</div>
                                <div className="indi_pin" style={{ backgroundColor: data.ispin ? "#000" : "#9E9E9E" }}></div>
                                <div className="indi_del" onClick={(e) => { handleDeleteMessage(e,data.id); }}></div>
                            </div>
                            <div className="indi_publish" style={{ backgroundColor: data.ispublish ? "#9E9E9E" : "#000" }}>{data.ispublish ? "已發佈" : "發佈"}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}