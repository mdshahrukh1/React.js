import logo from '../../assets/logo.png';
import '../../assets/mystyle.css';

function UseCase2() {
    const name = "SKILL ACADEMY";
    return ( 
        <>
        <h2 className='temp'>Welcome to {name}</h2>
        <img src={logo} alt='Logo' height='300' width='350'/>
        </>
     );
}

export default UseCase2;