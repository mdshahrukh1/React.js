import { useState } from 'react'
import Counter from './components/Counter'
import UseCase1 from './components/UseCase1'
import UseCase2 from './components/UseCase2';
import RealTimeClock from './components/RealTimeClock';
import DataFilteration from './components/DataFilteration';
import Timer from './components/Timer';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0);

  const [flag, setFlag] = useState(false);
  const handler = () => {
    flag ? setFlag(false) : setFlag(true);
  }

  return (

    //  <Counter />

    <>

      {flag ? <UseCase1 /> : ''}
      <button onClick={handler}>{flag ? 'Hide' : 'Show'}</button>


      {/* <UseCase1 /> */}
      <UseCase2 />
      <Timer />
      <RealTimeClock />
      <DataFilteration />

    </>

    // <div className='container text-center'>
    //   <h2>Counter App {count}</h2>
    //   <button onClick={() => setCount(count + 1)} className='btn btn-secondary'>+</button>
    //   <button onClick={() => setCount(count - 1)} className='btn btn-secondary ms-2'>-</button>
    // </div>
  )
}

export default App
