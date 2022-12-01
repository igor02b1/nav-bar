import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/Navbar/navbar'
import { Contato } from './paginas/Contato/Contato';
import { Home } from './paginas/Home/Home';
import { Preços } from './paginas/Preços/Preços'
import { Sobre } from './paginas/sobre/Sobre';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/preços' element={<Preços />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </Router>
  );
}


export default App;