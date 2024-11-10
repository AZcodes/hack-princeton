import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import HomePage from './Homepage';
import CashbackPage from './CashbackPage';

import Expenses from './Expenses'; 

import HousingPage from './HousingPage';
import ProfilePage from './ProfilePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/expenses" element={<Expenses/>} />
          <Route path="/cashback" element={<CashbackPage/>} />
          <Route path="/housingpage" element={<HousingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;