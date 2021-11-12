export default function B_Carouse({ news, isActive = false }) {
    return (
        <div id={news.name} className={isActive ? 'carousel_img showbox' : 'carousel_img'} style={{ background: "url(" + news.im + ") no-repeat center top" }}>
            <div className="mask"></div>
            <div className="content">
                <div className="content_title">{news.title}</div>
                <div className="content_text">{news.btm_content}</div>
            </div>
        </div>
    );
}