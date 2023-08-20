import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { AuthProvider } from "./context/auth"
import PublicRoute from "./routes/PublicRoute"
import PrivateRoute from "./routes/PrivateRoute"

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
          </Routes>
      </AuthProvider>
    </>
  )
}

export default App
