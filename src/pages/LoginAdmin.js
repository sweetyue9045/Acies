import * as QueryString from "query-string";
import Footer from "../components/Footer";
import Login from "../components/Admin/A_Login"
import A_Nav from "../components/A_Nav"

function LoginAdmin(props) {
    const { redirect } = QueryString.parse(props.location.search);

    return (
        <>
            <A_Nav bg="transparent" posi="absolute" />
            <Login redirect={redirect} />
            <Footer />
        </>
    );
}

export default LoginAdmin;