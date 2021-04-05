import React, { Component } from 'react'
import Button from '@material-ui/core/Button'



export default class itemCount extends Component {
    constructor(){
        super();

        this.state = {
            contador: 0,
        };
    }

    handleIncrement = () => {
        this.setState({contador: this.state.contador + 1});
    };
    handleDecrement = () => {
        this.setState({contador: this.state.contador - 1});
    };
    render() {
        return (
            <div>
               <Button onClick={this.handleIncrement} color="secondary" variant="contained"
      size="large">+</Button> 
               <Button onClick={this.handleDecrement} color="secondary" variant="contained"
      size="large">-</Button>
            </div>
        )
    }
}


