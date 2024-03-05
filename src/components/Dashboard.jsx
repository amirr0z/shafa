import React, { useContext } from "react";
import { Link, NavLink, Navigate, Route, Routes } from "react-router-dom";
import CreateService from "./CreateService";
import CreateStaff from "./CreateStaff";
import Schedule from "./Schedule";
import authContext from "../contexts/authContext";
import StaffSchedule from "./StaffSchedule";
import History from "./History";
import Attendee from "./Attendee";
import Service from "./Service";
import { motion } from "framer-motion";

export default function Dashboard() {
    const { user, setUser } = useContext(authContext);

    const handleLogout = (e) => {
        localStorage.removeItem("access");
        localStorage.removeItem("name");
        setUser({});
    };
    if (user.access != null)
        return (
            <div className="min-h-screen w-full bg-auth flex flex-col items-center">
                <div className="xl:w-9/12 w-full gap-4 flex flex-col p-5 flex-grow overflow-hidden">
                    <motion.div
                        className="bg-white/40 backdrop-blur-md w-full flex flex-row items-center justify-around p-2 rounded-xl text-xl text-zinc-600"
                        initial={{ y: "2rem", opacity: 0.9 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                    >
                        {user.access == "staff" ? (
                            <button onClick={handleLogout}>خروج</button>
                        ) : user.access == "secretary" ? (
                            <>
                                <NavLink
                                    to="/attendee"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b-2 border-cyan-700 text-cyan-700"
                                            : ""
                                    }
                                >
                                    مراجع
                                </NavLink>
                                <NavLink
                                    to="/service"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b-2 border-cyan-700 text-cyan-700"
                                            : ""
                                    }
                                >
                                    خدمات
                                </NavLink>
                                <NavLink
                                    to="/history"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b-2 border-cyan-700 text-cyan-700"
                                            : ""
                                    }
                                >
                                    سوابق
                                </NavLink>
                                <button onClick={handleLogout}>خروج</button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/addservice"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b-2 border-cyan-700 text-cyan-700"
                                            : ""
                                    }
                                >
                                    خدمات
                                </NavLink>
                                <NavLink
                                    to="/addstaff"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b-2 border-cyan-700 text-cyan-700"
                                            : ""
                                    }
                                >
                                    کارمند
                                </NavLink>
                                <NavLink
                                    to="/schedule"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "border-b-2 border-cyan-700 text-cyan-700"
                                            : ""
                                    }
                                >
                                    برنامه
                                </NavLink>
                                <button onClick={handleLogout}>خروج</button>
                            </>
                        )}
                    </motion.div>
                    <motion.div
                        className="bg-white/40 backdrop-blur-md w-full flex-grow rounded-xl p-10 flex flex-col justify-center items-center"
                        initial={{ y: "-2rem", opacity: 0.9 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                    >
                        {user.access == "staff" ? (
                            <StaffSchedule />
                        ) : user.access == "secretary" ? (
                            <Routes>
                                <Route path="/service" element={<Service />} />
                                <Route
                                    path="/attendee"
                                    element={<Attendee />}
                                />
                                <Route path="/history" element={<History />} />
                            </Routes>
                        ) : (
                            <Routes>
                                <Route
                                    path="/addservice"
                                    element={<CreateService />}
                                />
                                <Route
                                    path="/addstaff"
                                    element={<CreateStaff />}
                                />
                                <Route
                                    path="/schedule"
                                    element={<Schedule />}
                                />
                            </Routes>
                        )}
                    </motion.div>
                </div>
            </div>
        );
    else return <Navigate to="/login" />;
}
