import React, { useContext, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import authContext from "../contexts/authContext";
import { redirect, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import staffPng from "/staff.png";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { user, setUser } = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        switch (username) {
            case "admin":
                setUser({ access: "admin", name: "admin" });
                break;
            case "secretary":
                setUser({ access: "secretary", name: "secretary" });
                break;
            default:
                setUser({ access: "staff", name: "staff" });
                break;
        }
        localStorage.setItem("access", username);
        localStorage.setItem("name", username);
        navigate("/");
    };

    return (
        <div className="min-h-screen min-w-full flex flex-row bg-auth items-center justify-center overflow-hidden">
            <div className="xl:w-8/12 w-full relative">
                <motion.div
                    className="xl:block hidden z-10 -top-14 -left-14 backdrop-blur-sm bg-white/30 rounded-xl  w-full h-full absolute"
                    initial={{ y: "1.75rem", x: "1.75rem" }}
                    animate={{ y: "0", x: "0" }}
                    transition={{
                        duration: 1.5,
                        ease: "backInOut",
                    }}
                ></motion.div>
                <motion.div
                    className="bg-white/30 backdrop-blur-sm rounded-xl w-full p-20 flex flex-row justify-between items-center z-20 relative"
                    initial={{ y: "-1.75rem", x: "-1.75rem" }}
                    animate={{ y: "0", x: "0" }}
                    transition={{
                        duration: 1.5,
                        ease: "backInOut",
                    }}
                >
                    <motion.div
                        className="xl:w-1/2 w-full flex flex-col items-center justify-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                    >
                        <h3 className="text-2xl">ورود</h3>
                        <span dir="ltr">
                            username:admin|secretary|staff/password:'*'
                        </span>
                        <div className="flex flex-col items-center justify-center gap-3 xl:w-4/5 w-full">
                            <Input
                                label="یوزرنیم"
                                type="text"
                                value={username}
                                setValue={setUsername}
                            />
                            <Input
                                label="رمز"
                                type="password"
                                value={password}
                                setValue={setPassword}
                            />
                        </div>
                        <Button name="تایید" action={handleSubmit} />
                    </motion.div>
                    <motion.div
                        className="w-1/2 xl:flex hidden items-center justify-center h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "backInOut",
                        }}
                    >
                        <img
                            src={staffPng}
                            alt="staff"
                            style={{ filter: "drop-shadow(#71717A 5px 5px)" }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
