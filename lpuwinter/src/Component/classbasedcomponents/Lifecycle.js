import React, {Component} from 'react'

export default class Lifecycle extends Component{
    constructor(){
        super()
        console.log("constructor called")
        this.state={
            fname:"Adfar",
            color:"blue",
            count:0
        }
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate Called")
    }
    static getDerivedStateFromProps(props,state){
        console.log("ShouldComponentUpdate claeed")
    }
    render(){
        console.log("render called")
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>this.setState({count:this.state.count+1})}>+++++</button>
                <h1>{this.setState.text}</h1>
            </div>
        )
    }
}