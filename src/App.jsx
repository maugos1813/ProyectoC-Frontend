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
