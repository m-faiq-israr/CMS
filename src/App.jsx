import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import { ContextProvider } from "./context/ContextProvider";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import { AuthProvider, useAuth } from "./Firebase/AuthContext";
import PrivateRoute from "./Firebase/PrivateRoute";

function App() {


  return (
      <AuthProvider>
    <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <MainPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
    </ContextProvider>
      </AuthProvider>
  );
}

export default App;
