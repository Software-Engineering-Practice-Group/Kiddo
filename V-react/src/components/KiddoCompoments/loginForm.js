import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/KiddoCss/log.css'

class LoginForm extends React.Component{

    render(){
        return (
            <div className="ghxz-box">
                <div className="ghxz-01">
                    <h1>登录</h1>
                </div>
                <form id="form1" name="form1" method="post" action="Login.html">
                    <div className="ghxz-02">
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">用户类型：</div>
                            <ul>
                                <li>
                                    <input id="ysq_type" name="usertype" type="radio" defaultValue="患者"
                                           className="input_radio"
                                           onClick="document.getElementById('reset_psw').style.display='block';document.getElementById('register').style.display='block';document.getElementById('submit').href='index.html'"/>
                                    <label>患者</label>
                                </li>
                                <li>
                                    <input id="ysq_type" name="usertype" type="radio" defaultValue="医生"
                                           className="input_radio"
                                           onClick="document.getElementById('reset_psw').style.display='none';document.getElementById('register').style.display='none';document.getElementById('submit').href='doc.html'"/>
                                    <label>医生</label>
                                </li>
                                <li>
                                    <input id="ysq_type" name="usertype" type="radio" defaultValue="管理员"
                                           className="input_radio"
                                           onClick="document.getElementById('reset_psw').style.display='none';document.getElementById('register').style.display='none';document.getElementById('submit').href='ManagerDep.html'"/>
                                    <label>管理员</label>
                                </li>
                            </ul>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">账号：</div>
                            <input className="ghzc-01-02" name="txtTel" type="text" id="txtTel" maxLength={12}/>
                            <div className="ghzc-01-03" id="txtTel_lable"> *账号即为注册时您输入的手机号码</div>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">密码：</div>
                            <input className="ghzc-01-02" name="txtPwd" type="password" id="txtPwd" maxLength={15}/>
                            <div className="ghzc-01-03" id="txtPwd_lable"> *请填写您的密码</div>
                            <br/><br/><br/>
                        </div>
                        <div className="ghxz-02-btn">
                            <a id="submit" className="ghlc-min-02">登录</a>
                            <br/>
                            {/* id用于js做判断决定选择用户类型后是否显示该按钮 */}
                            <a id="reset_psw" className="ghlc-min-02" href="ResetPsw.html">忘记密码</a>
                            <br/>
                            <a id="register" className="ghlc-min-02" href="Register.html">注册</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

// const WrappedLoginForm = (loginForm);
export default LoginForm;