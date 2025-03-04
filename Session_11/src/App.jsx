import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AddSales from './components/AddSales'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Top5 from './components/Top5'
import Revenue from './components/Revenue'
import { Container } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify'
import Dashboard from './components/dashboard'
import UserDetail from './components/UserDetail'

function App() {
  // const [count, setCount] = useState(0)

  const [ login, setLogin ] = useState(null);
  // const [selected, setSelected] = useState(null);

  return (
    <BrowserRouter>
    <div>
      <Header login={login} setLogin={setLogin} />
    </div>

    <Container className='mt-3'>
    <Routes>
      <Route path = "/" element = {<Home />} />

      <Route path = "/login" element = {<Login setLogin={setLogin}/>} >
          {/* <Route path = "/userdetail"element = {<UserDetail selected = {selected}/>}/> */}
      </Route>

      <Route path = "/register" element = {<Register />} />
      <Route path = "/addsales" element = {<AddSales />} />
      <Route path = "/top5" element = {<Top5 />} />
      <Route path = "/revenue" element = {<Revenue />} />
      <Route path = "/dashboard" element = {<Dashboard />} />
    </Routes>
    </Container>
    <ToastContainer />
    </BrowserRouter>
  )
}

export default App
