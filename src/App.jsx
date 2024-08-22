
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

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Examns } from "./components/Examns";
import { Exam } from "./components/Exam";
import { RecordView } from "./components/RecordVideo";
import { Login } from "./Pages/Login";
import { Dashboard } from "./Pages/Dashboard";

export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/examenes" element={<Examns />} />
        <Route path="/:id" element={<Exam />} />
        <Route path="/video" element={<RecordView />} />
      </Routes>
    </div>
  );
}

