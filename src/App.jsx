import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import { ContextProvider } from "./context/ContextProvider";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
      
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
