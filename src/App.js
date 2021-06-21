import React, { Component } from 'react';
import TodoForm from './components/TodoForm/TodoForm.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
import './App.css'

class App extends Component {
  state = { 
    todos:[]
   }
   removetodo = id =>{
     this.setState({
       todos:this.state.todos.filter(todo => todo.id !== id)
     })
   }
   createtodo=(task,id) =>{
     this.setState({
       todos:[...this.state.todos,{task:task,id:id}]
     })
   }
   updatedtodo=(task,id) =>{
     const updatedtodo=this.state.todos.map(function(todo){
          if(todo.id === id){
            return {...todo,task:task}
          }
          return todo;
     })
     this.setState({
       todos:updatedtodo
     })
   }
  render() { 
    const todos=this.state.todos;
    const removetodo=this.removetodo;
    const createtodo=this.createtodo;
    const updatedtodo=this.updatedtodo;
    return ( 
        <div className="TodoApp">
          <h1>Todo List!<span>A Simple React TodoList app</span></h1>
          <TodoList todos={todos} removetodo={removetodo} updatedtodo={updatedtodo} ></TodoList>
          <TodoForm createtodo={createtodo}></TodoForm>
         </div>
     );
  }
}
 
export default App;