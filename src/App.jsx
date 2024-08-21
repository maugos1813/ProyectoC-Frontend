import React from "react";
import { Route, Routes } from "react-router-dom";
import { Examns } from "./components/Examns";
import { Exam } from "./components/Exam";
import { RecordView } from "./components/RecordVideo";
import { Login } from "./Pages/Login";

export default function App() {
  return (
    <div>
      <Login/>
      {/* <Routes>
        <Route path="/" element={<Examns />} />
        <Route path="/:id" element={<Exam />} />
        <Route path="/video" element={<RecordView />} />
      </Routes> */}
    </div>
  );
}
