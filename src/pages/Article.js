import Nav from "../components/Nav"
import BArticle from "../components/Board/B_Article"
import BackNav from "../components/BackNav"
import Footer from "../components/Footer"

function Article({ match }) {
    const APIs = JSON.parse(window.localStorage.getItem("ArticleAPI"))
    const Article = APIs.find(
        (x) => x.id == match.params.articleId
    );

    return (
        <>
            <Nav />
            <BArticle article={Article} />
            <BackNav />
            <Footer />
        </>
    );
}

export default Article;