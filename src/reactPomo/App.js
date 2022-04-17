import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const sec=0;
 class App extends Component {
    constructor(){
        super()
        this.state={
            isFocus:false,
            min:5
        }
    }
   startFocus = ()=>{
      let x= setInterval(()=>{
        this.setState({
          min:this.state.min-1
        })
           if(this.state.min <= 0){
            this.setState({
              min:this.state.min+1
            })
            clearInterval(x)
           }
       },1000)
     
    }
    pause =()=>{
      
    }
    dec=()=>{
      console.log("increase");
      this.setState({
        min:this.state.min+1
      })
      console.log(this.state.min);
    }
    render() {
    console.log("rendered");
    return ( 
        <>
      <div>{this.state.min<10?`0${this.state.min}`:this.state.min}</div>
      <button onClick={this.startFocus}> start</button>
      <button onClick={this.dec}>increase</button>
        </>
    )
  }
}
ReactDOM.render(<App/>,document.querySelector("#root"))