import React, { useContext } from 'react';
import CounterContext from './counterContext';


const Child = () => {

    let counterValue = useContext(CounterContext)
    //console.log(counterValue);
    return(
        <div>
            <h1>This is first Child using Counter Context</h1>
            <h4>Counter value is : {counterValue[0]}</h4>
            <button onClick={()=>{counterValue[1](++counterValue[0])}}>
                Increment Context
            </button>
        </div>
    )
}

export default Child;