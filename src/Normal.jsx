import React, { Component, PureComponent } from 'react'
export default class Normal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        
    }
    
    
    render() {

        return (
            <div className='center'>
                <h1> {this.data} Counter  : {this.state.count} </h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}> Counter + </button>
                <hr />



                <h1 className="head">Pure Components</h1>
                <br />
                <p>1.Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values.
                    <br /><br />
                    2.PureComponent is Primarily Used for Performance Optimization.
                    <br /><br />
                    </p>                <h2 className='pure'>Pure Component in React {this.state.count1}</h2>
                <button onClick={() => { this.setState({ count1: 5 }) }}>Update Value</button>

            </div>

            
        )
    }
}