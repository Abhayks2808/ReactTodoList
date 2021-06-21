import React, { Component } from 'react';
import Todo from '../Todo/Todo';
import './TodoList.css'
class TodoList extends Component {
  
  render() { 
    const todos=this.props.todos;
    const removetodo=this.props.removetodo;
    const updatedtodo=this.props.updatedtodo;
    return (  
      <div className="show-todos">
          {
            todos.map(function(todo){
              return <Todo key={todo.id} id={todo.id} todo={todo.task} removetodo={removetodo} updatedtodo={updatedtodo}/>
            })
          }
      </div>
    );
  }
}
 
export default TodoList;