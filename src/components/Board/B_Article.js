import Title from "./B_Title";

export default function Article({ article }) {
    const Content = article.content.replaceAll("\n", "<br />");

    return (
        <div className="Article">
            <div className="arti_category">#{article.category}</div>
            <Title Title_top={article.title} />
            <div className="arti_time">{article.write_time}</div>
            <div className="arti_content" dangerouslySetInnerHTML={{ __html: Content }}></div>
        </div>
    );
}