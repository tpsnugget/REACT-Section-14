import React, { Component } from "react"
import "./Todo.css"

class Todo extends Component {

   constructor(props) {
      super(props)
      this.state = {
         isEditing: false,
         text: this.props.text,
         completed: false
      }
      this.handleClick = this.handleClick.bind(this)
      this.toggleForm = this.toggleForm.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.handleToggle = this.handleToggle.bind(this)
   }

   handleClick(e) {
      this.props.removeTodo(this.props.id)
   }

   toggleForm(){
      this.setState({
         isEditing: !this.state.isEditing
      })
   }

   handleUpdate(e){
      e.preventDefault()
      this.props.updateTodo(this.props.id, this.state.text)
      this.setState({
         isEditing: false
      })
   }

   handleChange(e){
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleToggle(){
      this.props.toggleTodo(this.props.id)
   }

   render() {
      let result
      if (this.state.isEditing) {
         result = (
         <div>
            <form onSubmit={this.handleUpdate}>
               <input type="text" value={this.state.text} name="text" onChange={this.handleChange} />
               <button>Save</button>
            </form>
         </div>
         )}
      else {
         result = (
            <div>
               <span className={this.props.completed && "Todo-completed"} onClick={this.handleToggle}>{this.props.text}</span>
               <span>
                  <button className="Todo-edit-button" onClick={this.toggleForm}>Edit</button>
                  <button className="Todo-delete-button" onClick={this.handleClick}>X</button>
               </span>
               <div>
               </div>
            </div>
         )
      }
      return result
   }
}

export default Todo