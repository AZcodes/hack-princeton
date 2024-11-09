import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HomePage from './Homepage';
import CashbackPage from './CashbackPage';
import HousingPage from './HousingPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cashback" element={<CashbackPage />} />
          <Route path="/housingpage" element={<HousingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
