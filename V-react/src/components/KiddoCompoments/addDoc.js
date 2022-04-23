import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/KiddoCss/log.css'

class AddDoc extends React.Component{

    render(){
        return (
            <div className="ghxz-box">
                <div className="ghxz-01">
                    <div />
                    <h1>医生添加</h1>
                </div>
                <form id="form1" name="form1" method="post" action="Register.html">
                    <div className="ghxz-02">
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">医生姓名：</div>
                            <input className="ghzc-01-02" name="txtUser" type="text" id="txtUser" maxLength={15} />
                            <div className="ghzc-01-03" id="txtUser_lable">*请填写医生姓名</div>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">账号：</div>
                            <input className="ghzc-01-02" name="txtTel" type="text" id="txtTel" maxLength={12} />
                            <div className="ghzc-01-03" id="txtTel_lable"> *请填写医生手机号码，该号码将作为登陆账号</div>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">密码：</div>
                            <input className="ghzc-01-02-no" name="txtPwd" type="password" id="txtPwd" defaultValue={11111} maxLength={15} />
                            <div className="ghzc-01-03" id="txtPwd_lable"> *初始密码为11111，请勿修改初始密码！</div>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">身份证号：</div>
                            <input className="ghzc-01-02" name="txtCard" type="text" id="txtCard" maxLength={18} />
                            <div className="ghzc-01-03" id="txtCard_lable"> *请填写医生身份证号</div>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">性别：</div>
                            <ul>
                                <li>
                                    <input id="ysq_type" name="sex" type="radio" defaultValue="男" className="input_radio" />
                                    <label>男</label>
                                </li>
                                <li>
                                    <input id="ysq_type" name="sex" type="radio" defaultValue="女" className="input_radio" />
                                    <label>女</label>
                                </li>
                            </ul>
                        </div>
                        <div className="ghzc-01">
                            <div className="ghzc-01-01">所属科室：</div>
                            <input className="ghzc-01-02" name="txtDep" type="text" id="txtDep" maxLength={18} />
                            <div className="ghzc-01-03" id="txtDep_lable"> *请填写医生所属科室</div>
                        </div>
                        <div className="ghxz-02-btn">
                            <input type="submit" name="Submit" style={{float: 'left'}} defaultValue="提交" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddDoc