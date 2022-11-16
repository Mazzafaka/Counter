import React, {useState} from "react";
import './Counter.css'

const Counter = () => {
    const [count, changeCount]=useState(0);
    console.log("count>>>", count);
    return (
        <>
            <div className="wrapper">
                <p>A single independent react component <br />
                    using Reacting hook</p>
                <div className="counter">
                    <h2>{count}</h2>
                    <button onClick={()=>changeCount(count-1)}>
                        <span>-1</span>
                    </button>
                    <button onClick={()=>changeCount(count+1)}>
                        <span>+1</span>
                    </button>
                    <button onClick={()=>changeCount(0)}>
                        <span>reset</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Counter;