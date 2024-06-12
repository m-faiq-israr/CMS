import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import ThemeToggle from "./components/ThemeToggle";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { ContextProvider } from "./context/ContextProvider";
import SignUpPage from "./pages/SignUpPage";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        {/* <div className=" absolute right-4 top-2 flex items-center gap-2">
          <ThemeToggle />
        </div> */}

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin" element={<MainPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
