import React, { Component } from "react"
import uuid from "uuid/v4"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import "./TodoList.css"

class TodoList extends Component {

   constructor(props){
      super(props)
      this.state = {
         todo: []
      }
      this.addNewTodo = this.addNewTodo.bind(this)
      this.removeTodo = this.removeTodo.bind(this)
      this.updateTodo = this.updateTodo.bind(this)
      this.toggleCompletion = this.toggleCompletion.bind(this)
   }

   addNewTodo(e){
      let temp = {text: e, crossOff: false, id: uuid(), completed: false}
      temp = [...this.state.todo, temp]
      // console.log("This is temp in addNewTodo: ", temp)
      this.setState({
         todo: temp
      })
   }

   removeTodo(idToRemove){
      let temp = [...this.state.todo]
      // console.log("This is temp in removeTodo: ", temp)
      let index = temp.findIndex(e => e.id === idToRemove)
      temp.splice(index,1)
      this.setState({
         todo: temp
      })
   }

   updateTodo(idToUpdate, upDatedTodo){
      const updatedTodos = this.state.todo.map(todo => {
         if(todo.id === idToUpdate){
            return {...todo, text: upDatedTodo}
         }
         return todo
      })
      this.setState({
         todo: updatedTodos
      })
   }

   toggleCompletion(idToUpdate, upDatedTodo){
      const updatedTodos = this.state.todo.map(todo => {
         if(todo.id === idToUpdate){
            return {...todo, completed: !todo.completed}
         }
         return todo
      })
      this.setState({
         todo: updatedTodos
      })
   }

   render() {
      
      let Todos = this.state.todo.map(e => (
         <Todo id={e.id}
               key={e.id} 
               text={e.text} 
               crossOff={e.crossOff} 
               completed={e.completed}
               addNewTodo={this.addNewTodo}
               removeTodo={this.removeTodo}
               updateTodo={this.updateTodo}
               toggleTodo={this.toggleCompletion}
               />
      ))
      return (
         <div>
            <h1>Todo List!</h1>
            <h5>A Simple React Todo List App</h5>
            {Todos}
            <NewTodoForm addNewTodo={this.addNewTodo}/>
         </div>
      )
   }
}

export default TodoList