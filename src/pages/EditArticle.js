import Nav from "../components/A_Nav"
import Edit from "../components/content/A_Edit"
import Footer from "../components/Footer"

import { useContext } from 'react';

import { API } from '../App';;

function EditArticle({ match }) {
    const APIs = useContext(API)
    const Article = APIs.find(
        (x) => x.id == match.params.articleId
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