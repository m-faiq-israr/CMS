import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/LayoutPages/ProfilePage";
import LoginPage from "./pages/AuthPages/LoginPage";
import { ContextProvider } from "./context/ContextProvider";
import SignUpPage from "./pages/AuthPages/SignUpPage";
import MainPage from "./pages/MainPage";
import { AuthProvider } from "./Firebase/AuthContext";
import PrivateRoute from "./Firebase/PrivateRoute";
import PublicRoute from "./Firebase/PublicRoute";

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
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignUpPage />
                </PublicRoute>
              }
            />
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
