import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './components/pages/home.js';
import Event from './components/pages/event.js';
import About from './components/pages/about.js';

import './App.css';


function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
          <Routes>
            <Route path="/" exact  components ={Home}></Route>
            <Route path="/Event" exact  components={Event}></Route>
            <Route path="/About" exact  components ={About}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
