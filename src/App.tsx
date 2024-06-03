import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginLayout from "./layout/LoginLayout";
import MainLayout from "./layout/MainLayout";
import Loading from "./components/ui/loading/Loading";

const Login = React.lazy(() => import("./pages/Login"));
const MainPage = React.lazy(() => import("./pages/MainPage"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default App;
