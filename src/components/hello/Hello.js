import React from "react";
import './Hello.css';

class Hello extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            text: "Hello",
            sign: "Rus"
        }
    }
    changeText = () =>{
        this.setState({text: this.state.text === "Hello" ? "Ghbdtn" : "Hello"});
        this.setState({sign: this.state.sign === "Rus" ? "Утп" : "Rus"});
    }
    render()
    {
        return(
            <div>
                <button onClick={this.changeText}>{this.state.sign}</button>
                <div className='hello'>{this.state.text}</div>
            </div> 
        )
    }
}

export default Hello;