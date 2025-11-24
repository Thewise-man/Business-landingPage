import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../../src/lib/supaBaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(null);

// You Get session on first load
useEffect(() => {
const getSession = async () => {
const { data } = await supabase.auth.getSession();
setUser(data?.session?.user || null);
};
getSession();

// You Listen to login/logout events
const { data: listener } = supabase.auth.onAuthStateChange(
(_event, session) => {
setUser(session?.user || null);
}
);

return () => listener.subscription.unsubscribe();
}, []);

const logout = () => {
supabase.auth.signOut();
setUser(null);
};

return (
<AuthContext.Provider value={{ user, logout }}>
{children}
</AuthContext.Provider>
);
};

export const useAuth = () => useContext(AuthContext);