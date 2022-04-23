import React from 'react';
import {withRouter} from "react-router-dom";


class Docs extends React.Component{

    render(){
        const {name,sex,number,dep,remain}=this.props
        return (
            <tr className="mail-min" style={{height: '35px'}}>
                <th>{name}</th>
                <td>{sex}</td>
                <td>{number}</td>
                <td>{dep}</td>
                <td>{remain}</td>
                <td><button>修改</button><button>删除</button></td>
            </tr>

        )
    }
}

export default Docs;