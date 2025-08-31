import React from "react";
import './Convert.css';

class Convert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            signBinary: "Binary",
            signDecimal: "Decimal",
            inputValue: ""
        }
    }

    inputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    decimalToBinary = (decimalNumber) => {
        decimalNumber = this.state.inputValue;
        if (decimalNumber === 0) return "0";

        let binary = "";
        let num = decimalNumber;

        while (num > 0) {
            binary = (num % 2) + binary;
            num = Math.floor(num / 2);
        }

        this.setState({
            text: binary
        });
        //return binary;
    }

    binaryToDecimal = (binaryString) => {
        binaryString = this.state.inputValue;
        let decimal = 0;

        for (let i = 0; i < binaryString.length; i++) {
            if (binaryString[i] === '1') {
                decimal += Math.pow(2, binaryString.length - 1 - i);
            } else if (binaryString[i] !== '0') {
                return NaN;
            }
        }

        this.setState({
            text: decimal
        });
        //return decimal;
    };

    render() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        size={10}
                    />
                </div>
                <button onClick={this.decimalToBinary}>{this.state.signBinary}</button>
                <button onClick={this.binaryToDecimal}>{this.state.signDecimal}</button>
                <div className='font-size'>{this.state.text}</div>
            </div>

        )
    }
}
export default Convert;