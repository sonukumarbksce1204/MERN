import React,{Component} from 'react'
import {incerement, decrement} from './reduxclass/action'
import {connect} from 'react-redux'
import { deceriment } from './action'
class CounterClass extends Component{
    render(){
        const {count,incerement,decrement}=this.props
        return (
            <div>
                <h1>Count: {count}</h1>
                <button onClick={()=>incerement()}>Incerement</button>
                <button onClick={()=>deceriment}>Decerement</button>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    count:state
})

const mapDispatchToProps=(dispatch)=>({
    incerement:()=>dispatch(increment()),
    deceriment:()=>dispatch(deceriment())
})
export default connect(mapStateToProps,mapDispatchToProps)(CounterClass)