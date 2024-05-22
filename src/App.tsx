import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AuthLogin from "./components/authentication/AuthLogin";
import MainLayout from "./components/layout/MainLayout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLogin />}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
