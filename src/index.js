import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dogs from './components/Dogs';



ReactDOM.render(
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dogs />} />
      <Route path="/dogs/:dogsname" element={<Dogs />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
  