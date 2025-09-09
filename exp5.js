import React,{useState}from "react";
function CounterFuctional(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h2>functional component counter</h2>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            </div>
    );

}
export default CounterFunctional;