//Browser Router Imports
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//Link Components imports
import Home from './component/home';
import About from './component/about';
import Projects from './component/projects';
import Contact from './component/contact';
//Redux imports
import { useSelector, useDispatch } from 'react-redux';
import { setFalse } from './redux/tour';
//CSS Import
import './App.css';


function App() {
  // Gets Redux Tour State
  const { value } = useSelector((state) => state.tour);
  // Allows use of Redux functions
  const dispatch = useDispatch();
  //function to stop guided tour
  function stopTour() {
    dispatch(setFalse());
    window.location.reload(true);
    return;
  }

  return (
    <Router className="App">
      <div className="App">
        {value ?
          <div className='tourReturn'>
            <div className='tourStop' onClick={() => { stopTour(); clearTimeout();}}>STOP TOUR</div>
          </div>
          :
          <></>
        }
        <div className="navBar">
          <Link className='navLink noSelect' to="/">Home</Link>
          <Link className='navLink noSelect' to="/about">About</Link>
          <Link className='navLink noSelect' to="/projects">Portfolio</Link>
          <Link className='navLink noSelect' to="/contact">Contact</Link>
        </div>
      </div>


      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
