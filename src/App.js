import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import './App.css';
import Home from './component/home';
import About from './component/about';
import Projects from './component/projects';
import Contact from './component/contact';

function App() {
  return (
    <Router className="App">  
     <div className="App">  
        <div className="navBar">
          <Link className='navLink noSelect' to="/">Home</Link>  
          <Link className='navLink noSelect' to="/about">About</Link>  
          <Link className='navLink noSelect' to="/projects">Portfolio</Link>  
          <Link className='navLink noSelect' to="/contact">Contact</Link>  
        </div>

    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/projects" element={<Projects/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
    </Routes>
</div>   
  </Router>  
  );
}

export default App;
