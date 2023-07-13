import axios from "axios";
import Landing from "./pages/Landing";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterForm from "./components/RegisterForm";
import RegisterPage from "./pages/RegisterPage";
import Store from "./pages/Store";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthStore } from "./store/auth";

// axios.defaults.baseURL = "http://localhost:1337";
//backend url
axios.defaults.baseURL = "http://127.0.0.1:1337";
axios.defaults.withCredentials = true;

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <>
      <ShoppingCartProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/store"
            element={
              <ProtectedRoute isAllowed={isAuth}>
                <Store />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
