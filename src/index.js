import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Home } from './pages/Home';
import { DadosFinanceiros } from './pages/DadosFinanceiros';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/dadosFinanceiros" element={<DadosFinanceiros/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);