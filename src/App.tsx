import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Main} from "./app/pages/Main/Main";
import {Article} from "./app/pages/Article/Article";
import {NotFound} from "./app/pages/NotFound/NotFound";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
