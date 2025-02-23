// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
// import UseCase1 from "./components/JSX/UseCase1";
// import UseCase2 from "./components/JSX/UseCase2";
// import UseCase3 from "./components/JSX/UseCase3";
import UseCase4 from "./components/JSX/UseCase4";
import Slider from './components/Slider';
// import Login from "./components/Login";
import Footer from './components/Footer';

// function Navbar(){
//   return(
//     <h1>Navigation Bar</h1>
//   )
// }

function App() {
  return (
    <div className="container-fluid">
      {/* <h1 className="text-primary">Heading</h1>
      <Header/>
      <Navbar/>
      <Login/>
      <UseCase1/>
      <UseCase2/>
      <UseCase3/> */}
      <Header/>
      <Slider/>
      <UseCase4/> 
      <Footer/>
    </div>
  );
}

export default App;
