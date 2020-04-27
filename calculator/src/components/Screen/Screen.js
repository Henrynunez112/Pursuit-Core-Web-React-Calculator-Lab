import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen';
import ComputingScreen from './ComputingScreen/ComputingScreen'

const Screen = () =>{
    return(
        <div className='screen'>
            <ResultScreen />
            <ComputingScreen />
        </div>
    )
};

export default Screen;