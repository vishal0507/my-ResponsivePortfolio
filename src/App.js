import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div >
      <Routes>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
