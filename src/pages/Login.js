import * as QueryString from "query-string";
import Footer from "../components/Footer";
import G_Content from "../components/G_Content"
import A_Nav from "../components/A_Nav"

function Login(props) {

    const {redirect} = QueryString.parse(props.location.search);

    return (
        <>
            <A_Nav bg="transparent" posi="fixed" />
            <G_Content redirect={redirect}/>
            <Footer />
        </>
    );
}

export default Login;