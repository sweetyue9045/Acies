import { Link } from 'react-router-dom';

export default function Devs({ devs }) {
    return (
        <a className="content_box" style={{ background: "url(" + devs.im + ") no-repeat center top" }}>
            <div className="mask"></div>
            <div className="content">
                <div className="content_title">{devs.title}</div>
                <div className="content_text">{devs.content}</div>
            </div>
        </a>
    );
}