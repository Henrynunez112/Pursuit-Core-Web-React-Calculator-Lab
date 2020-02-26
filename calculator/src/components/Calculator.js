import React from 'react';
import Button from './Button';
import Result from './Results'

class Calculator extends React.Component{
    state = {
        result: ""
    }
    render(){
        return(
            <div>
                <div className="calculator">
                    <Result result={this.state.result}/>
                    <Button onClick={this.onClick}/>
                </div>
            </div>
        )
    }

}

export default Calculator