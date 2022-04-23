import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/KiddoCss/log.css'

class ResetPsw extends React.Component{

    render(){
        return (
            <div className="ghxz-box">
                <div className="ghxz-01">
                    <div />
                    <h1>重设密码</h1>
                </div>
                <form id="form1" name="form1" method="post" action="ResetPsw.html">
                    <div className="ghxz-02">
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">账号：</div>
                            <input className="ghzc-01-02" name="txtTel" type="text" id="txtTel" maxLength={12} />
                            <div className="ghzc-01-03" id="txtTel_lable"> *账号即为注册时您输入的手机号码</div>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">身份证号：</div>
                            <input className="ghzc-01-02" name="txtCard" type="text" id="txtCard" maxLength={18} />
                            <div className="ghzc-01-03" id="txtCard_lable"> *请如实填写您的身份证号，否则您将无法重设密码</div>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">密码：</div>
                            <input className="ghzc-01-02" name="txtPwd" type="password" id="txtPwd" maxLength={15} />
                            <div className="ghzc-01-03" id="txtPwd_lable"> *请填写新的密码</div>
                        </div>
                        <div className="ghxz-02-btn">
                            <input type="submit" name="Submit" defaultValue="提交" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ResetPsw