import "../AContent.css";

import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../actions";
import { StoreContext } from "../../store";

import EYES_OPEN from "../../assets/im/login_eyes_open.svg"
import EYES_CLOSE from "../../assets/im/login_eyes_close.svg"

export default function Login({ redirect }) {
    const { state: { userSignin: { loading, userInfo } }, dispatch } = useContext(StoreContext);

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory();
    const [eyes,seteyes]=useState(EYES_CLOSE)
    var auth;
    useEffect(() => {
        checkoutHandler();
    }, [])


    const onFinish = async (e) => {
        e.preventDefault();
        auth = await login(dispatch, userLogin);
        auth && history.push("/admin/list");
    };

    const checkoutHandler = () => {
        if (userInfo == null) {
        }
        else {
            history.push("/admin/list")
        }
    }
    const userLogin = {
        email: email,
        password: password
    };

    const ShowHidePassWord = () => {
        var txtPasw = document.getElementById("password");
        console.log(txtPasw.type);
        if (txtPasw.type == "text") {
            txtPasw.type = "password";
            seteyes(EYES_CLOSE)
        }
        else {
            txtPasw.type = "text";
            seteyes(EYES_OPEN)
        }

    }
    return (
        <div className="Login">
            <div className="login_card">
                <form action="" id="login">
                    <div className="title">管理員登入</div>
                    <input type="email" className="input" id="email" placeholder="帳號" onChange={(event) => setemail(event.target.value)} autoComplete="off" required />
                    <div>
                        <input type="password" className="input" id="password" placeholder="密碼" onChange={(event) => setpassword(event.target.value)} autoComplete="off" required />
                        <div className="pass_eyes" onClick={ShowHidePassWord}
                            style={{backgroundImage: `url(${eyes})`}}></div>
                    </div>
                    {loading ? (
                        <input type="submit" value="load..." onClick={onFinish} className="login_btn" />
                    ) : (
                        <input type="submit" value="登入" onClick={onFinish} className="login_btn" />
                    )}
                </form>
            </div>
        </div>
    );
}