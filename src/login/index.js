import React from 'react';

import './index.css';
import { MAIN } from '../route';

const USERNAME = 'userName';
const PASSWORD = 'password';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    userName: '张三',
                    password: 'zhangsan'
                }
            ],
            checkout: false
        }
    }

    componentDidMount() {
        // console.log("compontentDIdMount");
    }

    checkLogin = () => {
        this.state.users.map((user) => {
            if(this.refs[USERNAME].value === user.userName) {
                if(this.refs[PASSWORD].value === user.password) {
                    this.props.history.push(MAIN);
                } else {
                    alert('用户名或密码错误')
                }
            }
            return null;
        })
    }

    loginWithoutCheck = () => {
        this.props.history.push(MAIN);
    }

    allowClick = () => {
        this.setState({
            checkout: this.refs[USERNAME].value && this.refs[PASSWORD].value
        })
    }

    render() {
        return (
            <div className="login">
                <label>
                    用户名：
                    <input type="text" ref={USERNAME} onChange={() => {this.allowClick()}} placeholder="张三"/>
                </label>
                <br />
                <label>
                    密码：
                    <input type="password" ref={PASSWORD} onChange={() => {this.allowClick()}} placeholder="zhangsan" />
                </label>
                <br />
                <button onClick={() => {this.checkLogin()}} disabled={!this.state.checkout} >
                    登录
                </button>
                <button onClick={() => {this.loginWithoutCheck()}} >
                    进入（免登陆）
                </button>
                {/* <a href='' >下载压缩包</a> */}
            </div>
        );
    }
}