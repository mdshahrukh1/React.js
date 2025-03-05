import axios from "axios";

function Login() {
    const handleLogin = async()=> {
        try {
            const resp = await axios.post('http://localhost:5000/login');
            console.log(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
     );
}

export default Login;