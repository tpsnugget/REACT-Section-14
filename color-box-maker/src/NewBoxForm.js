import React, { Component } from "react"

class NewBoxForm extends Component {

   constructor(props) {
      super(props)
      this.state = {
         width: "",
         height: "",
         backgroundColor: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault()
      this.props.addItem(this.state)
      this.setState({
         width: "",
         height:"",
         backgroundColor: ""
      })
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div>
               <label>
                  Width: <input type="text" name={"width"} value={this.state.width} onChange={this.handleChange} />
               </label>
            </div>

            <div>
               <label>
                  Height: <input type="text" name={"height"} value={this.state.height} onChange={this.handleChange} />
               </label>
            </div>

            <div>
               <label>
                  Color: <input type="text" name={"backgroundColor"} value={this.state.backgroundColor} onChange={this.handleChange} />
               </label>
            </div>
            <button>Submit</button>
         </form>
      )
   }
}

export default NewBoxForm