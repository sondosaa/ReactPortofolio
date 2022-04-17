import { useState } from "react";

function Counter(){
    const [num,setNum]=useState(20);
    const Increment = () =>
    {
       return setNum(num+1);
    
    }
    const Decrement = () =>
    {
       return setNum(num-1);
    
    }
    return (
        <div className='incrementANDdecrement'>
            <span className="count">{num}</span>
            <br/>
            <button className="inc" onClick={Increment}>Increment</button>
            <button className="dec" onClick={Decrement}>Decrement</button>
        </div>
    );
}
export default Counter;