import "./A_Nav.css";

import LOGO from "../assets/im/a_nav_logo.svg";
import { logout } from "../actions";
import { useHistory } from "react-router-dom";

import { useEffect, useContext } from "react";
import { StoreContext } from "../store"

export default function Nav({ bg, posi }) {
    const { state: { userSignin: { userInfo, remember } }, dispatch } = useContext(StoreContext);
    const history = useHistory();

    useEffect(() => {
        LogoutButton();
    }, [])
    const LogoutButton = () => {
        if(userInfo == null){
            document.getElementById("logout").style.display="none";
        }else{
            document.getElementById("logout").style.display="flex";
        }
        }

    const Logout = async (e) => {
        e.preventDefault();
        await logout(dispatch);
        history.push("/admin");
    };

    useEffect(() => {
        if (remember)
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        else
            localStorage.removeItem("userInfo");
    }, [userInfo, remember]);
    
    return (
        <div className="a_nav" style={{ backgroundColor: bg, position: posi }}>
            <div className="nav_left">
                <div className="logo">
                    <img src={LOGO} alt="LOGO" />
                </div>
                <div className="symbol">
                    管理模式
                </div>
            </div>
            <div className="nav_right">
                <div className="user"> {userInfo
                    ? `${userInfo.username}`
                    : ``
                }</div>
                <input id="logout" type="button" value="登出" onClick={Logout} className="login_btn" />
            </div>
        </div>
    );
}