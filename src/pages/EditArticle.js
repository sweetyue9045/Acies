import Nav from "../components/A_Nav"
import Edit from "../components/Admin/A_Edit"
import Footer from "../components/Footer"

function EditArticle({ match }) {
    const APIs = JSON.parse(window.localStorage.getItem("ArticleAPI"))
    const Article = APIs.find(
        (x) => x.id === match.params.articleId
    );
    return (
        <>
            <Nav />
            <Edit article={Article}/>
            <Footer />
        </>
    );
}

export default EditArticle;