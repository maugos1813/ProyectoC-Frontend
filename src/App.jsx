import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Examns } from "./components/Examns";
import { Exam } from "./components/Exam";
import { RecordView } from "./components/RecordVideo";
import { NotFound } from "./pages/NotFound";
import { Nav } from "./components/Nav/Nav";
import { Profile } from "./pages/Profile";
import { DashM } from "./pagesM/DashM";
import { Tablas } from "./pagesM/Tablas";
import { CreationE } from "./pagesM/CreationE";
import { Videos } from "./components/Videos";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Nav />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/examenes" element={<Examns />}/>
          <Route path="/videos" element={<Videos />}/>
          <Route path="/Recording" element={<RecordView />}/>
        </Route>

        <Route path="/exams/:id" element={<Exam/>}/>
        <Route path="*" element={<NotFound />} />

        <Route path="/dashM" element={<DashM/>}/>
        <Route path="/tablas" element={<Tablas/>}/>
        <Route path="/creation" element={<CreationE/>}/>
      </Routes>
    </div>
  );
}
