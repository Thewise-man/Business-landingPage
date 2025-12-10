import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supaBaseClient";

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  // ===== Auth Guard =====
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) navigate("/Signup");
      else setUserEmail(data.user.email);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserEmail(session?.user?.email || "");
      }
    );

    return () => listener?.subscription?.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-[#0a0e1a] text-white transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          <h2 className="text-xl font-bold">My Dashboard</h2>
        </div>

        <nav className="flex flex-col gap-4 p-6">
          <NavLink to="/dashboard" onClick={() => setIsOpen(false)} end>Overview</NavLink>
          <NavLink to="/dashboard/frontend" onClick={() => setIsOpen(false)}>Frontend</NavLink>
          <NavLink to="/dashboard/backend" onClick={() => setIsOpen(false)}>Backend</NavLink>
          <NavLink to="/dashboard/cybersecurity" onClick={() => setIsOpen(false)}>Cybersecurity</NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64">
        {/* Navbar */}
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

          <h1 className="text-xl font-semibold">Dashboard</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:block">
              {userEmail}
            </span>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </header>

        {/* ✅ CHILD PAGES RENDER HERE */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
