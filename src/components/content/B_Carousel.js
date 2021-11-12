export default function B_Carousel({ news, isActive = false }) {
    return (
        <div className={isActive ? 'carousel_img showbox' : 'carousel_img'} style={{ background: "url(" + news.im + ") no-repeat center top" }}>
            <div className="mask"></div>
            <div className="content">
                <div className="content_title">{news.title}</div>
                <div className="content_text">{news.content}</div>
            </div>
        </div>
    );
}