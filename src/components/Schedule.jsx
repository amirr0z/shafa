import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Schedule() {
    const [tab, setTab] = useState("شنبه");
    const TabButton = (props) => (
        <button
            onClick={(e) => setTab(props.day)}
            className={
                tab == props.day
                    ? "p-2 rounded-xl  bg-white/5 backdrop-blur-sm"
                    : ""
            }
        >
            {props.day}
        </button>
    );
    const StaffCard = (props) => (
        <motion.div
            className="flex flex-col min-w-56 border rounded-xl border-zinc-600 items-center h-min"
            initial={{ y: "1rem" }}
            animate={{ y: "0" }}
            transition={{
                duration: 1.5,
                ease: "backInOut",
                delay: Math.random(),
            }}
        >
            <span className="border-zinc-600 border-b w-full text-center p-1">
                دکتر اکبری
            </span>
            <span>از ۱۰ صبح</span>
            <span>تا ۵ عصر</span>
        </motion.div>
    );
    return (
        <div className="w-full flex flex-col flex-grow gap-6 text-xl text-zinc-600">
            <div className="w-full flex flex-row gap-6  overflow-x-scroll hide-scrollbar items-center justify-between">
                <TabButton day="شنبه" />
                <TabButton day="یکشنبه" />
                <TabButton day="دوشنبه" />
                <TabButton day="سه شنبه" />
                <TabButton day="چهار شنبه" />
                <TabButton day="پنج شنبه" />
                <TabButton day="جمعه" />
            </div>
            <div className="w-full flex-grow rounded-xl  bg-white/5 backdrop-blur-sm">
                <div className="w-full flex flex-wrap gap-6 p-6 justify-around">
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                    <StaffCard />
                </div>
            </div>
        </div>
    );
}
