import './G_Content.css';
import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { login } from '../actions'
import { StoreContext } from "../store"

export default function G_Content({ redirect }) {
    const { state: { userSignin: { loading, error } }, dispatch } = useContext(StoreContext);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory();

    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo.errorFields[0].errors[0])
    };

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const auth = await login(dispatch, values);
        auth && history.push("/profile");
    };

    //   const checkoutHandler = () =>{
    //     history.push("/login?redirect=shopping")
    //   }
    return (
        <div className="Login">
            <div className="login_card">
                <form id="login"
                    initialValues={{
                        remember: true,
                    }}
                    // onFinish={onFinish}
                    // onFihishFailed={onFinishFailed}
                >

                    <div className="text">管理員登入</div>
                    <input className="input" id="email" placeholder="帳號" onChange={(event) => setemail(event.target.value)} required />
                    <input className="input" id="password" placeholder="密碼" onChange={(event) => setpassword(event.target.value)} required />
                    <input type="submit" value="登入" className="login_btn" />
                </form>
            </div>
        </div>
    );
}