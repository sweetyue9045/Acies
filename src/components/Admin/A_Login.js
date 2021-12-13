import '../AContent.css';
import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { login } from '../../actions'
import { StoreContext } from "../../store"

export default function Login({ redirect }) {
    const { state: { userSignin: { loading, userInfo } }, dispatch } = useContext(StoreContext);
    
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory();
    var auth;
    useEffect(() => {    
        checkoutHandler();
    }, [])
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed: ', errorInfo.errorFields[0].errors[0])
    // };

    const onFinish = async (e) => {
        e.preventDefault();
      //  console.log('Received values of form: ', userLogin);
       
        auth = await login(dispatch, userLogin);
        auth && history.push("/list");
    };

    const checkoutHandler = () => {
        if (userInfo ==null){
           //console.log(userInfo)
        }
        else {
            history.push("/list")
        }
    }
    const userLogin = {
        email: email,
        password: password
    };
    return (
        <div className="Login">
            <div className="login_card">
                <form action="" id="login">
                    <div className="title">管理員登入</div>
                    <input className="input" id="email" placeholder="帳號" onChange={(event) => setemail(event.target.value)} autoComplete="off" required />
                    <input className="input" id="password" placeholder="密碼" onChange={(event) => setpassword(event.target.value)} autoComplete="off" required />
                    {/* <input type="submit" value="登入" onClick={onFinish} className="login_btn" /> */}
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