import React from 'react';
import {withRouter} from "react-router-dom";


class Processes extends React.Component{

    render(){
        const {name,process}=this.props
        return (
            <tr className="mail-min" style={{height: '35px'}}>
                <th>{name}</th>
                <td>{process}</td>
                <td><button>修改</button>
                    <button>删除</button></td>
            </tr>

        )
    }
}

export default Processes;