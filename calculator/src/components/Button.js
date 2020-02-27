import React from 'react'
import './Button.css'

class Button extends React.Component{
    render(){
        return (
            <div className="button">
            <div className="row">
                <button value="(" onClick={(e) =>{this.props.handleMainButton(e)}}>(</button>
                <button value=")" onClick={(e) =>{this.props.handleMainButton(e)}}>)</button>
                <button value="CE" onClick={(e) =>{this.props.handleMainButton(e)}}>CE</button> 
                <button value="C" onClick={(e) =>{this.props.handleMainButton(e)}}>C</button>
            </div>
            <div className="row">
                <button value="1" onClick={(e) =>{this.props.handleMainButton(e.target.value)}}>1</button>
                <button value="2" onClick={(e) =>{this.props.handleMainButton(e)}}>2</button>
                <button value="3" onClick={(e) =>{this.props.handleMainButton(e)}}>3</button> 
                <button value="+" onClick={(e) =>{this.props.handleMainButton(e)}}>+</button>
            </div>
            <div className="row">
                <button value="4" onClick={(e) =>{this.props.handleMainButton(e)}}>4</button>
                <button value="5" onClick={(e) =>{this.props.handleMainButton(e)}}>5</button>
                <button value="6" onClick={(e) =>{this.props.handleMainButton(e)}}>6</button>
                <button value="-" onClick={(e) =>{this.props.handleMainButton(e)}}>-</button>
            </div>
            <div className="row">
                <button value="7" onClick={(e) =>{this.props.handleMainButton(e)}}>7</button>
                <button value="8" onClick={(e) =>{this.props.handleMainButton(e)}}>8</button>
                <button value="9" onClick={(e) =>{this.props.handleMainButton(e)}}>9</button>
                <button value="*" onClick={(e) =>{this.props.handleMainButton(e)}}>*</button>
            </div>     
            <div className="row">
                <button value="." onClick={(e) =>{this.props.handleMainButton(e)}}>.</button>
                <button value="0" onClick={(e) =>{this.props.handleMainButton(e)}}>0</button>
                <button value="=" onClick={(e) =>{this.props.handleMainButton(e)}}>=</button>
                <button value="/" onClick={(e) =>{this.props.handleMainButton(e)}}>/</button>
            </div>

            </div>
        )
    }
}

export default Button;