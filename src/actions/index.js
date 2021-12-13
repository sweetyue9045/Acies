import {
    BEGIN_LOGIN_REQUEST,
    SUCCESS_LOGIN_REQUEST,
    FAIL_LOGIN_REQUEST,
    BEGIN_REGISTER_REQUEST,
    SUCCESS_REGISTER_REQUEST,
    FAIL_REGISTER_REQUEST,
    LOGOUT_REQUEST,
} from "../utils/constants";
import {
    signInWithEmailPassword,
    registerWithEmailPassword,
} from "../api";

export const login = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_LOGIN_REQUEST });
    try {
        const user = await signInWithEmailPassword(
            userInfo.email,
            userInfo.password
        );
        dispatch({
            type: SUCCESS_LOGIN_REQUEST,
            payload: user,
        });
        return user;
    } catch (e) {
        dispatch({
            type: FAIL_LOGIN_REQUEST,
            payload: e,
        });
        console.log(e);
        return null;
    }
};

export const register = async (dispatch, userInfo) => {
    dispatch({ type: BEGIN_REGISTER_REQUEST });
    try {
        const user = await registerWithEmailPassword(
            userInfo.email,
            userInfo.password,
            userInfo.username
        );
        console.log(user);
        dispatch({
            type: SUCCESS_REGISTER_REQUEST,
            payload: user,
        });
        return user;
    } catch (e) {
        dispatch({
            type: FAIL_REGISTER_REQUEST,
            payload: e,
        });
        console.log(e);
        return null;
    }
};

export const logout = async (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });
};
