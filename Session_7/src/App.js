// import logo from './logo.svg';
import './App.css';
import Header from './contextdemo2/Header';
// import Usage from './contextdemo2/Usage';
import Login from './contextdemo3/Login';
import LoginContextProvider from './contextdemo3/logincontext';
// import MyGrandGParent from './contextdemo1/MyGrandGParent';

// import GreatGrandParent from "./propdrilling/GreatGrandParent";

function App() {
  return (
    <div className="App">
     {/* <GreatGrandParent /> */}
     {/* <MyGrandGParent /> */}
     <LoginContextProvider>
      <Header/>
      <Login/>
      {/* <Usage/> */}
     </LoginContextProvider>
    </div>
  );
}

export default App;
