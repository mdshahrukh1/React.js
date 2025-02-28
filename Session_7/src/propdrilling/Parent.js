import Child from "./Child";

function Parent({name}) {

    return ( 
        <div>
            <h3>Great Grand Parnet</h3>
            <Child name={name}/>
        </div>
     );
}

export default Parent;