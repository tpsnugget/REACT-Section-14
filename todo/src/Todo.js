import React, { Component } from "react"
import "./Todo.css"

class Todo extends Component {

   constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(e) {
      this.props.removeTodo(this.props.id)
   }

   render() {
      return (
         <div>
            <span>{this.props.text}</span>
            <span className="Todo-delete-button">
               <button onClick={this.handleClick}>X</button>
            </span>
            <div>
            </div>
         </div>
      )
   }
}

export default Todo