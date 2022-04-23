import React from 'react';
import {withRouter} from "react-router-dom";


class Deps extends React.Component{

    render(){
        const {name,docNum,userNum,remain}=this.props
        return (
            <tr className="mail-min" style={{height: '35px'}}>
                <th>{name}</th>
                <td>{docNum}</td>
                <td>{userNum}</td>
                <td>{remain}</td>

                {/*因为修改诊室只有修改其中医生和就诊流程两个环节，*/}
                {/*而修改流程单独实现了，剩下的部分与manageDoctor相同*/}
                {/*↓↓↓此处切换的页面同manageDoc相同，均展示为医生的修改，只是传入内容（即医生信息）不同，此处传该诊室的全部医生信息*/}
                <td><button><a href="解释见↑">详情查询</a></button><br />
                    <button>删除科室</button></td>
            </tr>

        )
    }
}

export default Deps;