// import logo from './logo.svg';
// import './App.css';
import TodoApp from './components/TodoApp';
// import UseCase1 from './components/UseCase1';
// import UseCase2 from './components/UseCase2';
// import UseCase3 from './components/UseCase3';

function App() {
  return (
    <div className="container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <UseCase1/>
      <UseCase2/>
      <UseCase3/> */}
      <TodoApp/>
    </div>
  );
}

export default App;
