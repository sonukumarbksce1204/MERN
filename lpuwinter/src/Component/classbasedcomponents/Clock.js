import React,{Component} from 'react';

export default class Clock extends Component{
    constructor(){
        super();
        this.state={
            time:new Date()
        };
        this.componentDidMount(){
            setInterval(()=>{
                this.setState({time:new Date()})
            },1000)
        }
        
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.time.toString()}</h1>
            </div>
        )
    }
}

