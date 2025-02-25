// import logo from './logo.svg';
// import './App.css';

// import TodoApp from './components/states/TodoApp.js';

// import UseCase1 from './components/states/UseCase1';
// import UseCase2 from './components/states/UseCase2';
// import UseCase3 from './components/states/UseCase3';

// import Ucase1 from './components/props/UCase1.js';
// import Ucase2 from './components/props/UCase2.js';
import Products from './components/props/Products.js';
import TodoList from './components/props/TodoList.js';
import PhoneList from './components/PhonebookApp/phonelist.js';

function App() {
  return (
    <div className="container">
      {/* <UseCase1 name="Sonam Soni" message="All the Best/>
      {/* <UseCase1 name="Ritwik"/>
      <UseCase2 name="Ekta" age = "45"/>
      <UseCase2 name="Devgan" age = "42"/>
      <UseCase3/> */}

       {/* <TodoApp/> */}
      <TodoList/>

      {/* <Ucase1/>
      <Ucase2/> */}

      <Products/>

      <PhoneList/>
    </div>
  );
}

export default App;
