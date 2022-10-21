import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './css/app.css';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
