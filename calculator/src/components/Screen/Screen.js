import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputingScreen from './ComputingScreen/ComputingScreen'

const Screen = (props) =>{
    return(
        <div className='screen'>
            <ResultScreen>{props.result}</ResultScreen>
            <ComputingScreen>{props.equation}</ComputingScreen>
        </div>
    )
};

export default Screen;