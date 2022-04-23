import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/KiddoCss/log.css'
import Docs from "./ListItem/docs";
import Deps from "./ListItem/deps";

class manageDoc extends React.Component{

    render(){
        const docList=[];
        this.props.docInfo.forEach((docInfo) => {
            docList.push(
                <Docs {...docInfo}/>
            );
        });

        return (
            <div className="ghxz-box">
                {/*            <a class="ghxz-04" href="ManagerDoc.html"><div></div><h1>医生管理</h1></a>*/}
                <a className="ghxz-01" href="ManagerDep.html"><div /><h1>医生管理</h1></a>
                <form name="form1" method="post" action="ManagerDoc.html">
                    <div className="ghcx-01">
                        <div className="ghcx-01-01">请输入医生账号：</div>
                        <input className="ghcx-01-02" name="txtTel" type="text" id="txtTel" defaultValue />
                        <input className="ghcx-01-btn" type="submit" name="Submit" defaultValue="查询" />
                        <a className="ghcx-01-btn" href="AddDoctor.html"><div>添加</div></a>
                    </div>
                    <div className="ghxz-02">
                        {/* 医生列表*/}
                        &lt;<table className="mail-box" border={1} cellSpacing={0} bordercolor="#ebebeb">
                        <tbody><tr className="mail-title" style={{height: '42px'}}>
                            <th>医生姓名</th>
                            <td>性别</td>
                            <td>账号</td>
                            <td>所属科室</td>
                            <td>诊号剩余</td>
                            <td>编辑</td>
                        </tr>

                        {/*该组件传递列表*/}
                        {docList}

                        </tbody></table>
                        <div className="tpfy">
                            <div className="page">
                                <a className="first" href="DoctorList/Page1.html">首页</a>
                                <a className="prev" href="javascript:;">上一页</a>
                                <span className="current">1</span><a className="num" href="/index.php/index/ghcx/p/2.html">2</a>
                                <a className="num" href="/index.php/index/ghcx/p/3.html">3</a>
                                <a className="num" href="/index.php/index/ghcx/p/4.html">4</a>
                                <a className="num" href="/index.php/index/ghcx/p/5.html">5</a>
                                <a className="next" href="/index.php/index/ghcx/p/2.html">下一页</a>
                                <a className="end" href="/index.php/index/ghcx/p/1566.html">末页</a>
                                <span className="rows">共 56 条记录</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

const WrappedManageDoc = (manageDoc);
export default WrappedManageDoc