import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import News from "./Pages/News";
import { Login } from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Examns } from "./components/Examns";
import { Exam } from "./components/Exam";
import { RecordView } from "./components/RecordVideo";
import { Videos } from "./components/Videos";


export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/examenes" element={<Examns />} />
        <Route path="/exam/:id" element={<Exam />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/video" element={<RecordView />} />
      </Routes>
    </div>
  );
}

