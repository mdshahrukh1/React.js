// import { useState } from "react";
import GrandParent from "./GrandParent";

function GreatGrandParent() {
    const [name, setName] = useState('Skill Academy');
    return ( 
        <div>
            <h3>Great Grand Parnet</h3>
            <GrandParent name={name}/>
        </div>
     );
}

export default GreatGrandParent;