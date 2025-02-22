// import logo from './logo.svg';

// import './App.css';
import Header from './components/header';
import Slider from './components/slider';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="container-fluid">
       <h1 className='text-primary-emphasis bg-success-subtle'>Skill Academy</h1>
      <Header/>
      <Slider/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
