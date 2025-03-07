import { useState } from 'react'
import Counter from './components/counter'
import TodoApp from './components/TodoApp'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">
    <Counter />
    <TodoApp />
   </div>
  )
}

export default App
