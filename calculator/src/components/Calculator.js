import React from 'react';
import Button from './Button';
import Result from './Results'

class Calculator extends React.Component{
    state = {
        result: ""
    }
    
    handleMainButton =(e)=>{
        e.preventDefault();
        debugger

        let button = e.target.value

        if(button === '='){

            this.calculate()

        }else if(button === 'C'){

            this.clear()

        }else if(button === 'CE'){

            this.delete()
        }else{
            this.setState({
                result: this.state.result + button
            })
        }
    }

    // onClick = (button) =>{
    //     debugger
    //     if(button === '='){
    //         this.calculate()
    //     }else if(button === 'C'){
    //         this.clear()
    //     }else if(button === 'CE'){
    //         this.delete()
    //     }else{
    //         this.setState({
    //             result: this.state.result + button
    //         })

    //     }
    // }
    //Shows the results of the input by pressing the "=" button
    calculate= () =>{
        try{
            this.setState({
                // The eval() function evaluates if the input represented as a string.
                result: (this.state.result || "") + ""
            })
        }catch(error){
            this.setState({
                result: error
            })
        }
    }

    //Clears out the output by pressing the C button
    clear =()=>{
        this.setState({
            result: ""
        })
    }

    //deletes the last character in the input by using the CE button
    delete = () =>{
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    }


    render(){
        return(
            <div>
                <div className="calculator">
                    <Result result={this.state.result}/>
                    <Button  handleMainButton={this.handleMainButton}/>
                </div>
            </div>
        )
    }

}

export default Calculator