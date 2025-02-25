import { useState } from "react";

function UseCase2() {
    const [count,setCount] = useState(0);

    // const increment = () =>{
    //     setCount(count+1);
    // }

    const decrement = ()=>{
        if(count === 0){
            return alert('You cannot decrease as its already 0');
        }
        setCount(count-1);
    }

    return (
        <div>
            <h3>count:{count}</h3>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default UseCase2;