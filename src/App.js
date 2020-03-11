import React, { Component } from 'react'
import './App.css';

 
 export class App extends Component {
  state = {
    name: 'hello'
  }
  changeName = (newName) =>{
    this.setState({
      name: newName
    })
  }
  changeNameFromInput = (event) =>{
    this.setState({
      name: event.target.value
    })
  }
   render() {
     return (
       <div className="App">
         <br></br>
         <button onClick={() => this.changeName('howdy cowboy!')}>Change state using anonymous func</button>
         <button onClick={(this.changeName.bind(this,'tada...'))}>Change state using bind</button>
         <br></br>
          <input type="text" onChange={this.changeNameFromInput} value={this.state.name}></input>
         <br></br>
         <div>{this.state.name}</div>
       </div>
     )
   }
 }
 
 export default App
 
