import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CreateStaffServiceCard({ title }) {
    const [status, setStatus] = useState(false);
    return (
        <motion.div
            className="rounded-xl border border-zinc-600 overflow-hidden p-2 flex flex-row items-center gap-1 xl:w-1/3 w-full"
            initial={{ x: "-1rem" }}
            animate={{ x: "0" }}
            transition={{
                duration: 1.5,
                ease: "backInOut",
                delay: Math.random(),
            }}
        >
            <div
                className={
                    status
                        ? "min-w-4 min-h-4 bg-cyan-600/60 rounded-md overflow-hidden"
                        : "min-w-4 min-h-4 bg-zinc-600/60 rounded-md overflow-hidden"
                }
                onClick={(e) => setStatus((v) => !v)}
            ></div>
            <span className=" pl-1 border-l border-zinc-600">{title}</span>
            <input
                className="border-none focus:border-none outline-none focus:outline-none shadow-none focus:shadow-none ring-0 focus:ring-0  w-min focus:bg-transparent bg-transparent flex-grow"
                type="number"
            />
        </motion.div>
    );
}
