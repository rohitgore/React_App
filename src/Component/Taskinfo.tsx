import React, { Component } from 'react'
import '../Component/Taskinfo.scss'
import Taskitems from './Taskitems'

interface taskvalue
{
  item?:any;
}
class Taskinfo extends Component<taskvalue,any> {
    constructor(props:taskvalue) {
        super(props)
    
        this.state = {
            task:[],
            item:{
                name:'',
                key:''
            }    
        }
    }
    
    handleInput=(event:any)=>
    {
      this.setState({item:{
          name:event.target.value,
          key:Date.now()
      }})
    }
    addTask = (event: any) => {
        event.preventDefault();
        const newInput = this.state.item;
        console.log(newInput);
        if (newInput !== "") 
        {
            const newInputs = [...this.state.task, newInput]
            this.setState({
                task: newInputs,
                item:
                {
                    name: '',
                    key: ''
                }
            })
            console.log(newInputs);
        }
    }
    
    deleteitem=(key:any)=>
    {
        const filteritem = this.state.task.filter((listiems:any) => listiems.key!==key);
        this.setState({task:filteritem});
    }

    updateitem=(text:any,keyy:number)=>{
        const value = this.state.task;
        // console.log(value);
        value.map((val:any) =>{
            if(val.key === keyy)
            {
              val.name = text;
            }
        })
        this.setState({task:value})
    }
    render() {
        return (
           <div className="formstyle">
               <header>
                    <form id="to-do-form" onSubmit={this.addTask}>
                        <input type="text" value={this.state.item.name} onChange={this.handleInput} placeholder="Enter Task name"></input>
                        <button type="submit">Add Task</button>
                    </form>
               </header>
               <Taskitems tasklist = {this.state.task} deleteItem={this.deleteitem} setUpdate={this.updateitem}></Taskitems>
           </div>
           
        )
    }
}

export default Taskinfo;
