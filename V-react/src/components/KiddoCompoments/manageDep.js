import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/KiddoCss/log.css'
import Deps from "./ListItem/deps";

class manageDep extends React.Component{

    render(){

        const depList=[];
        this.props.depInfo.forEach((depInfo) => {
            depList.push(
                <Deps {...depInfo}/>
            );
        });

        return (
            <div className="ghxz-box">
                <a className="ghxz-01" href="ManagerDoc.html"><div /><h1>诊室管理</h1></a>
                <form name="form1" method="post" action="ManagerDep.html">
                    <div className="ghcx-01">
                        <div className="ghcx-01-01">请输入科室名称：</div>
                        <input className="ghcx-01-02" name="txtTel" type="text" id="txtTel" defaultValue />
                        <input className="ghcx-01-btn" type="submit" name="Submit" defaultValue="查询" />
                        <input className="ghcx-01-btn" type="submit" name="AddDep" defaultValue="添加" />
                    </div>
                    <div className="ghcx-01">
                        <div className="ghcx-01-03">*请正确填写科室名称后点击-添加，列表刷新后可进行查询修改</div>
                    </div>
                    <div className="ghxz-02">
                        {/* 诊室列表*/}
                        <table className="mail-box" border={1} cellSpacing={0} bordercolor="#ebebeb">
                            <tbody><tr className="mail-title" style={{height: '42px'}}>
                                <th>科室</th>
                                <td>医生人数</td>
                                <td>患者人数</td>
                                <td>诊号剩余</td>
                                <td>编辑</td>
                            </tr>

                            {/*该组件传递列表*/}
                            {depList}

                            </tbody></table>
                        <div className="tpfy">
                            <div className="page">
                                <a className="first" href="DepatmentList/Page1.html">首页</a>
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

const WrappedManageDep = (manageDep);
export default WrappedManageDep