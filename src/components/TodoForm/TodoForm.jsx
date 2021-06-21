import React, { Component } from 'react';
import {v4 as uuid} from 'uuid';
import './TodoForm.css'

class TodoForm extends Component {
    state = { 
        task:""
     }
     handlechange=(e) =>{
        this.setState({
            task:e.target.value
        })
        
     }
     handleSubmit=(e) =>{
         e.preventDefault();
         this.props.createtodo(this.state.task,uuid())
         this.setState({
             task:""
         })
     }

    render() { 
        const handlechange=this.handlechange;
        const handleSubmit=this.handleSubmit;
        
        return ( 
            <form onSubmit={handleSubmit} className="TodoForm">
             <input type="text"  value={this.state.task} onChange={handlechange} placeholder="Enter a new Todo"></input>
             <button>Add Todo</button>
            </form>
         );
    }
}
 
export default TodoForm;