import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Rocket from "./pages/Rocket";
import Capsule from "./pages/Capsule";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/rockets" replace />} />
          <Route path="/rockets" element={<Rocket />} />
          <Route path="/capsules" element={<Capsule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
