import Nav from "../components/A_Nav";
import Add from "../components/Admin/A_Add";
import Footer from "../components/Footer";

import { useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import { StoreContext } from "../store";

function AddArticle() {
    const { state: { userSignin: { loading, userInfo } }, dispatch } = useContext(StoreContext);
    const history = useHistory();

    useEffect(() => {
        checkoutHandler();
    }, [])


    const checkoutHandler = () => {
        if (userInfo == null) {
            history.push("/admin")
        }
        else {
            history.push("/admin/add")
        }
    }
    return (
        <>
            <Nav />
            <Add />
            <Footer />
        </>
    );
}

export default AddArticle;