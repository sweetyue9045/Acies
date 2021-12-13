import * as QueryString from "query-string";
import Footer from "../components/Footer";
import Login from "../components/Admin/A_Login";
import Nav from "../components/A_Nav";

function LoginAdmin(props) {
    const { redirect } = QueryString.parse(props.location.search);

    return (
        <>
            <Nav bg="transparent" posi="absolute" />
            <Login redirect={redirect} />
            <Footer />
        </>
    );
}

export default LoginAdmin;