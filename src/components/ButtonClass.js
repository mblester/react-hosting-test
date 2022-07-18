import React from "react";


// export function Button(props) {
//     const { label = "Defaults", handleClick = () => console.log("I am default!")} = props;
//     return <button onClick={handleClick}>{label}</button>
// }

export class ButtonClass extends React.Component {
    constructor(props) {
       super(props) 
    }

    render() {
        const { label = "Defaults", handleClick = () => console.log("I am default!")} = this.props;
        return <button onclick={this.props.handleClick}>{this.props.label}</button>
    }
}