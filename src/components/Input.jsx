import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Input(props) {
    const ref = useRef();
    const [focus, setFocus] = useState(false);
    return (
        <motion.div
            className={
                focus
                    ? "flex xl:flex-row flex-col gap-2 items-center tracking-wider text-xl border-2 border-zinc-600 p-2 rounded-xl w-full text-zinc-600"
                    : "flex xl:flex-row flex-col gap-2 items-center tracking-wider text-xl border-2 border-zinc-500 p-2 rounded-xl w-full text-zinc-500"
            }
            onClick={(e) => ref.current.focus()}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "linear" }}
        >
            <span
                className={
                    focus
                        ? "xl:w-3/12 w-full xl:border-b-0 xl:border-l border-b border-zinc-600"
                        : "xl:w-3/12 w-full xl:border-b-0 xl:border-l border-b border-zinc-500"
                }
            >
                {props.label}
            </span>
            {props.type == "select" ? (
                <select
                    className="border-none focus:border-none outline-none focus:outline-none shadow-none focus:shadow-none ring-0 focus:ring-0 xl:w-9/12 w-full focus:bg-transparent bg-transparent"
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                    ref={ref}
                    onFocus={(e) => setFocus(true)}
                    onBlur={(e) => setFocus(false)}
                >
                    {props.options.map((val) => (
                        <option key={val}>{val}</option>
                    ))}
                </select>
            ) : (
                <motion.input
                    className="border-none focus:border-none outline-none focus:outline-none shadow-none focus:shadow-none ring-0 focus:ring-0 xl:w-9/12 w-full focus:bg-transparent bg-transparent"
                    type={props.type}
                    value={props.value}
                    onChange={(e) => props.setValue(e.target.value)}
                    ref={ref}
                    onFocus={(e) => setFocus(true)}
                    onBlur={(e) => setFocus(false)}
                />
            )}
        </motion.div>
    );
}
