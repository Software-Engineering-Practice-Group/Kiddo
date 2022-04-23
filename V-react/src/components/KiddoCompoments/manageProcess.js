import React from 'react';
import {withRouter} from "react-router-dom";
import '../../css/KiddoCss/log.css'
import Processes from "./ListItem/processes";

class ManageProcess extends React.Component{

    render(){
        const processList=[];
        this.props.processInfo.forEach((processInfo) => {
            processList.push(
                <Processes {...processInfo}/>
            );
        });

        return (
            <div className="ghxz-box">
                <a className="ghxz-01" href="ManagerDoc.html"><div /><h1>就诊流程管理</h1></a>
                <form name="form1" method="post" action="ManagerDep.html">
                    <div className="ghcx-01">
                        <div className="ghcx-01-01">请输入诊室名称：</div>
                        <input className="ghcx-01-02" name="txtTel" type="text" id="txtTel" defaultValue />
                        <input className="ghcx-01-btn" type="submit" name="Submit" defaultValue="查询" />
                    </div>
                    <div className="ghxz-02">
                        {/* 诊室列表*/}
                        <table className="mail-box" border={1} cellSpacing={0} bordercolor="#ebebeb">
                            <tbody><tr className="mail-title" style={{height: '42px'}}>
                                <th>科室</th>
                                <td>就诊流程</td>
                                <td>编辑</td>
                            </tr>

                            {/*该组件传递列表*/}
                            {processList}

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

export default ManageProcess