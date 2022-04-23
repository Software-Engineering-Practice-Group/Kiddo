import React from 'react';
import {withRouter} from "react-router-dom";
// import {Col} from 'antd';
import '../../css/KiddoCss/log.css'
import Users from "./ListItem/users";

class ManageUser extends React.Component{

    render(){
        const usersList=[];
        this.props.userInfo.forEach((userInfo) => {
            // if (userInfo.name.indexOf(filterText) === -1) {
            //     return;
            // }
            usersList.push(
                // <Col span={6}><BookListBook {...books[0]}/></Col>
                <Users {...userInfo}/>
            );
        });

        return (
            <div className="ghxz-box">
                {/*            <a class="ghxz-04" href="ManagerDoc.html"><div></div><h1>医生管理</h1></a>*/}
                <a className="ghxz-01" href="ManagerDep.html"><div /><h1>患者管理</h1></a>
                <form name="form1" method="post" action="ManagerDoc.html">
                    <div className="ghcx-01">
                        <div className="ghcx-01-01">请输入患者账号：</div>
                        <input className="ghcx-01-02" name="txtTel" type="text" id="txtTel" defaultValue />
                        <input className="ghcx-01-btn" type="submit" name="Submit" defaultValue="查询" />
                    </div>
                    <div className="ghxz-02">
                        {/* 患者列表*/}
                        &lt;<table className="mail-box" border={1} cellSpacing={0} bordercolor="#ebebeb">
                        <tbody><tr className="mail-title" style={{height: '42px'}}>
                            <th>患者姓名</th>
                            <td>黑名单</td>
                            <td>账号</td>
                            <td>取消次数</td>
                            <td>违约次数</td>
                            <td>编辑</td>
                        </tr>

                        {/*该组件传递列表*/}
                        {usersList}

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
                                <span className="rows">共 15658 条记录</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ManageUser