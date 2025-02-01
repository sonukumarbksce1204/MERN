import React, { Component } from 'react'

export class ErrorBoundery extends Component {
    constructor(){
        super()
        this.state={
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error,info){
        this.setState({
            error:error,
            errorInfo:info
        })
    }
  render() {
    if(this.state.errorInfo){
        return (
            <>
                <h1>App Crashad ....</h1>
                <p>{this.state.error.message}</p>
                <h1>App barbad</h1>
            </>
        )
    }
    return this.props.children
  }
}

export default ErrorBoundery
