import { useState } from "react";

function UseCase1() {
    // let name = "sonam soni";
    const [name,setName] = useState('Sonam Soni');
    const change=()=>{
        // console.log('Old Name:',name);
        // name = "Skill Academy";
        // console.log('Updated name:',name);
        setName('Skill Academy'); //Updating State
    }
    return ( 
        <div>
            <h3>Simple State Example</h3>
            <h3>Welcome{name}</h3>
            <button onClick={change}>Change Name</button>
        </div>
     );
}

export default UseCase1;