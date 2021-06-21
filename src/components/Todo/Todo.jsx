import React, { Component } from 'react';
import './Todo.css'
class Todo extends Component {
    state = { 
        isEditing:false,
        task:this.props.todo
     }
    handleremove=() =>{
     this.props.removetodo(this.props.id);
    }
    handleChange=(e) =>{
        this.setState({
            task:e.target.value
        })
    } 
    handleUpdate=(e) =>{
        e.preventDefault()
        this.props.updatedtodo(this.state.task,this.props.id)
        this.setState({
            isEditing:false
        })
    }
    toggleform=()=>{
        this.setState({
            isEditing:!this.state.isEditing
        })
    }
    render() { 
        const todo=this.props.todo;
        const handleremove=this.handleremove;
        const handleUpdate=this.handleUpdate;
        const toggleform=this.toggleform;
        let result;
        if(this.state.isEditing){
          result=(
              <div>
                  <form onSubmit={handleUpdate}>
                      <input type="text" value={this.state.task} onChange={this.handleChange}/>
                      <button onSubmit={handleUpdate}>Save</button>
                  </form>
              </div>
          )
        }
          else{
              result=(
                <div className="todos">
                <li>{todo}</li>
                <button onClick={toggleform}>Edit</button>
                <button onClick={handleremove}>Delete</button>
            </div>
              )
          }
        
        return result
    }
}
 
export default Todo;