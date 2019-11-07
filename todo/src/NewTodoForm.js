import React, { Component } from "react"

class NewTodoForm extends Component {

   constructor(props){
      super(props)
      this.state = {
         text: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e){
      this.setState({
         text: e.target.value
      })
   }

   handleSubmit(e){
      e.preventDefault()
      this.props.addNewTodo(this.state.text)
      this.setState({text: ""})
   }

   render() {
      return (
         <div>
            <form>
               <label>New Todo</label>
               <div>
                  <input type="text" value={this.state.text} onChange={this.handleChange}/>
                  <button onClick={this.handleSubmit}>Add Todo</button>
               </div>
            </form>
         </div>
      )
   }
}

export default NewTodoForm