// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Register from "./components/register";
import { ToastContainer } from 'react-toastify';
import UsersList from "./components/UsersList";
import UserDetail from "./components/UserDetail";
import { useState } from "react";
import Login from "./components/Login";


function App() {
  // const [count, setCount] = useState(0)

  const [selected, setSelected] = useState(null);

  return (
  
    <div className="container">
      <h1 className="text-center">Sample App</h1>
      <Login />
      <UsersList setSelected = {setSelected}/>
      <div className="row">
        <div className="col"><Register /></div>
        <div className="col">{selected && <UserDetail selected = {selected}/>}</div>
      </div>
      <ToastContainer />
    </div>
  
  )
}

export default App
