import './G_Content.css';
import { useState, useEffect, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import { login } from '../actions'
import { StoreContext } from "../store"
import { Form, Input, Button} from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';

export default function G_Content({ redirect }) {
    const { state: { userSignin: { loading, error } }, dispatch } = useContext(StoreContext);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [form] = Form.useForm();
    const history = useHistory();

    useEffect(() => {
        console.log("You are Gerent")
        checkoutHandler();
    }, null)
    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed: ', errorInfo.errorFields[0].errors[0])
    // };

    const onFinish = async () => {
        console.log('Received values of form: ', userInfo);
        const auth = await login(dispatch, userInfo);
        auth && history.push("/list");
    };

      const checkoutHandler = () =>{
        history.push("/list")
      }
    const userInfo = {
        email:email,
        password:password
    };
    return (
        <div className="bg">
            <div className="login_card">
                <Form id="login"
                    form={form}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    // onFihishFailed={onFinishFailed}
                >

                    <div className="text">管理員登入</div>
                    <Form.Item
                        className="input"
                        rules={[
                            {
                                type: "email",
                                message: "The input is not valid E-mail!",
                            },
                            {
                                required: true,
                                message: "Please input your E-mail!",
                            },
                        ]}
                        hasFeedback
                    ><Input
                            placeholder="帳號"
                            onChange={(event) => setemail(event.target.value)} required
                        />
                    </Form.Item>
                    <Form.Item
                       className="input"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Password!",
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password
                            type="password"
                            placeholder="密碼"
                            onChange={(event) => setpassword(event.target.value)} required 
                        />
                    </Form.Item>
                    <Form.Item>
                        {loading ? (
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form__button"
                                loading
                            >
                                Log in
                            </Button>
                        ) : (
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form__button"
                            >
                                Log in
                            </Button>
                        )}
                        {error === "" ? (
                            <></>
                        ) : (
                            <div className="login-form__error-wrap">
                                <h3 className="login-form__error-title">
                                    <WarningOutlined className="site-form-item-icon" />
                                    {"  "}There was a problem
                                </h3>
                                <p className="login-form__error-message">{error}</p>
                            </div>
                        )}
                    </Form.Item>
                    {/* <input className="input" id="email" placeholder="帳號" onChange={(event) => setemail(event.target.value)} required /> */}
                    {/* <input className="input" id="password" placeholder="密碼" onChange={(event) => setpassword(event.target.value)} required /> */}
                    {/* <input type="submit" value="登入" className="login_btn" /> {loading ? (
                        <input
                            type="submit"
                            className="login-form__button"
                            loading
                        />
                    ) : (
                        <button
                            type="submit"
                            className="login-form__button"
                        >
                            Log in
                        </button>
                    )} */}
                </Form>
            </div>
        </div>
    );
}