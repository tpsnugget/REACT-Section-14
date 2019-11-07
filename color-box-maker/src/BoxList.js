import React, { Component } from "react"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import uuid from "uuid/v4"

class BoxList extends Component {

   constructor(props) {
      super(props)
      this.state = { boxes: [{ width: "", height: "", backgroundColor: "", id: "" }] }
      this.addItem = this.addItem.bind(this)
      this.removeItem = this.removeItem.bind(this)
   }

   addItem(e) {
      const temp = {
         width: e.width,
         height: e.height,
         backgroundColor: e.backgroundColor,
         id: uuid()
      }
      this.setState({
         boxes: [...this.state.boxes, temp]
      })
   }

   removeItem(idToRemove){
      let temp = [...this.state.boxes]
      let index = temp.findIndex(f => f.id === idToRemove)
      temp.splice(index, 1)
      this.setState({
         boxes: temp
      })
   }

   render() {
      const boxes = this.state.boxes.map(box => (
         box.width !== "" && <Box
            key={box.id}
            id={box.id}
            width={box.width}
            height={box.height}
            backgroundColor={box.backgroundColor}
            removeItem={this.removeItem}
         />
      ))
      return (
         <div>
            <NewBoxForm addItem={this.addItem} />
            {boxes}
         </div>
      )
   }
}

export default BoxList