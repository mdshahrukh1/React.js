import { useState } from "react";

function AddTodo({ addTask }) {
    const [input, setInput] = useState('');
    
    const handler = () =>{
        if(input !== ''){
            addTask(input);
            setInput('');
        } else {
            alert('Task cannot be empty');
        }
    }
    return ( 
        <div className="from-group">
            <label>Enter Your Task:</label>
            <input type="text" placeholder="Enter Task" className="form-control mt-2" onChange={(e) => setInput(e.target.value)} value={input}/>

            <button className="btn btn-primary mt-3 w-100" onClick={handler}>Save Task</button>
        </div>
     );
}

export default AddTodo;