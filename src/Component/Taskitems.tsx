import React, { Component } from 'react';
import '../Component/Taskitems.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface List
{
    tasklist?:any;
    items?:any;
    deleteItem?:any;
    setUpdate?:any;
}
export default class Taskitems extends Component<List> 
{  
    render() {
        const newList = [...this.props.tasklist];
        return (
            <div>
                <hr/>
                <h4 className="heading">TASK LIST</h4>
                
                <div>{newList.map(details=><div className="Liststyle" key={details.key}><p>
                    <input className="ipvalue" type="text" value={details.name} key={details.key} onChange={(e)=>{this.props.setUpdate(e.target.value,details.key)}}/>
                <span className="icon"><FontAwesomeIcon className="faicons" icon="trash" onClick={()=>this.props.deleteItem(details.key)}/></span></p>
                                           </div>)}</div>  
            </div>
        )
    }
}
