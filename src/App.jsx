import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./pages/Signup";
import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx";
import Overview from "./pages/Dashboard/overview.jsx";
import Frontend from "./pages/Dashboard/Frontend.jsx"
import Backend from "./pages/Dashboard/Backend.jsx"
import Cybersecurity from "./pages/Dashboard/Cybersecurity.jsx";

function Layout({ children }) {
  const location = useLocation();

  // ✅ Hide navbar & footer on ALL dashboard routes
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ Protected Dashboard Layout */}
        <Route
          path="/Dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          {/* ✅ NESTED PROTECTED PAGES */}
          <Route index element={<Overview />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="backend" element={<Backend />} />
          <Route path="cybersecurity" element={<Cybersecurity />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
