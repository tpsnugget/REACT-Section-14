import React, { Component } from "react"

class Box extends Component {
   static defaultProps = {
      width: "10",
      height: "10",
      backgroundColor: "green"
   }

   constructor(props){
      super(props)
      this.state = {
         
      }
      this.handleClick = this.handleClick.bind(this)
   }

   handleClick(e){
      this.props.removeItem(this.props.id)
   }

   render() {
      let boxStyle = {
         width: `${this.props.width}em`,
         height: `${this.props.height}em`,
         backgroundColor: this.props.backgroundColor
      }
      return (
         <div>
            <div style={boxStyle}></div>
            <button onClick={this.handleClick}>X</button>
         </div>

      )
   }
}

export default Box