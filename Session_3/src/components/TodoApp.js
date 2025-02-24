import { useState } from "react";

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const addHandler=()=>{
        setTodos([...todos,input]); //spread opperator (...)
        setInput('');
    }

    const deleteTask = (item) =>{
        setTodos(todos.filter(data => data !== item));
    }
    return ( 
        <div>
            <h3 className="text-center text-bg-warning p-2">My Todos</h3> <hr/>
            <ul className="list-group">
                {
                    todos.map((item)=>(
                        <li className="list-group-item" key={item}>{item}
                        <button className="btn btn-danger float-end" onClick={()=>deleteTask(item)}>X</button>
                        </li>
                    ))
                }
            </ul>
            <div className="from-group">
                <label>Enter Your Task:</label>
                <input type="text" placeholder="check papers" className="form-control mt-2" onChange={(e)=> setInput(e.target.value)} value={input}/>
            </div>

            {/* Enter your Task: <input type="text" placeholder="Check papers" onChange={(e)=>setInput(e.target.value)} value={input}/> */}

            <button onClick={addHandler} className="btn btn-primary mt-3 w-100">Add Task</button>
        </div>
     );
};

export default TodoApp;
