import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import authContext from "./contexts/authContext";

function App() {
    const [user, setUser] = useState({
        access: localStorage.getItem("access"),
        name: localStorage.getItem("name"),
    });

    useEffect(() => {
        setUser({
            access: localStorage.getItem("access"),
            name: localStorage.getItem("name"),
        });
    }, []);

    return (
        <authContext.Provider value={{ user: user, setUser: setUser }}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Dashboard />} />
            </Routes>
        </authContext.Provider>
    );
}

export default App;
