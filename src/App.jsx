import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import News from './pages/News';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
