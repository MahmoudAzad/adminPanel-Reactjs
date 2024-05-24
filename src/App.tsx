import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import MainPage from "./pages/MainPage";
import LoginLayout from "./layout/LoginLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
