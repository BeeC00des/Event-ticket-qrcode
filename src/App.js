import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/pages/home.js';
import Event from './components/pages/event.js';
import About from './components/pages/about.js';
import Contact from './components/pages/contact.js';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="about" element={<About />} />
            <Route exact path="event" element={<Event />} />
            <Route exact path="contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;
