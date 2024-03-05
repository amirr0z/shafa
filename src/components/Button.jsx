import React from "react";
import { motion } from "framer-motion";

export default function Button(props) {
    return (
        <motion.button
            className="text-md font-bold text-cyan-700 text-xl border-2 border-cyan-700 rounded-xl p-2 text-nowrap"
            onClick={props.action}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 1, ease: "linear" }}
        >
            {props.name}
        </motion.button>
    );
}
