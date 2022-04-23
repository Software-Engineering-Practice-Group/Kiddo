import React from 'react';
import {withRouter} from "react-router-dom";


class Users extends React.Component{

    render(){
        const {name,blackList,number,cancel,miss}=this.props
        return (
            <tr className="mail-min" style={{height: '35px'}}>
                <th>{name}</th>
                <td>{blackList}</td>
                <td>{number}</td>
                {/*<td contentEditable="true">1</td>*/}
                <td>{cancel}</td>
                <td>{miss}</td>
                <td><button>加入黑名单</button><br />
                    <button>移出黑名单</button><br />
                    <button>删除</button></td>
            </tr>

        )
    }
}

export default Users;