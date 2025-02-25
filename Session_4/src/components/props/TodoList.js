import { useState } from "react";
import AddTodo from "./AddTodo";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTask = (task) => {
        setTodos([...todos, task]);
        alert('Task added Successfully');
    }

    const deleteTask = (item) =>{
        setTodos(todos.filter(data => data !== item));
    }

    return (  <div>
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
       
        {/* <button onClick={addHandler} className="btn btn-primary mt-3 w-100">Add Task</button> */}
     <AddTodo addTask={addTask} />
    </div>
 );
}

export default TodoList;