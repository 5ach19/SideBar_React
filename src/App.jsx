import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Messages from "./Pages/Messages";
import Analytics from "./Pages/analytics";
import FileManager from "./Pages/FileManager";
import Order from "./Pages/order";
import Saved from "./Pages/Saved";
import Setting from "./Pages/Setting";



function App() {
  return (
    <Router>
    <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics/>} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
    </SideBar>
    </Router>
  );
}

export default App;