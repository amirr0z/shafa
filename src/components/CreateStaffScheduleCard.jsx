import React, { useState } from "react";
import Input from "./Input";
import { motion } from "framer-motion";

export default function CreateStaffScheduleCard({ day }) {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    return (
        <motion.div
            className="flex xl:flex-row flex-col w-full items-center gap-6 text-xl justify-between"
            initial={{ x: "-1rem" }}
            animate={{ x: "0" }}
            transition={{
                duration: 1.5,
                ease: "backInOut",
                delay: Math.random(),
            }}
        >
            <span className="xl:w-1/6 w-full">{day}</span>
            <div className="xl:w-1/3 w-full">
                <Input type="time" value={from} setValue={setFrom} label="از" />
            </div>
            <div className="xl:w-1/3 w-full">
                <Input type="time" value={to} setValue={setTo} label="تا" />
            </div>
        </motion.div>
    );
}
