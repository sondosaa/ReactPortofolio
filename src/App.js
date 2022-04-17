
import { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import Productinfo from './views/Productinfo';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/counter/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import Todo from './views/Todo';
function App() {
  return (
    <>
     
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/about" element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shop/:id" element={<Productinfo/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/todolist" element={<Todo/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
