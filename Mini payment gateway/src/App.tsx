import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import TransactionPage from './pages/TransactionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
