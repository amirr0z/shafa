import React, { forwardRef } from "react";
import CreateStaffScheduleCard from "./CreateStaffScheduleCard";
import { motion } from "framer-motion";

export default forwardRef(function CreateStaffSchedule(props, ref) {
    return (
        <motion.div
            ref={ref}
            className="flex flex-col min-w-full gap-6"
            initial={{ x: "-100%" }}
            exit={{ x: "100%" }}
            animate={{ x: "0" }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <CreateStaffScheduleCard day="شنبه" />
            <CreateStaffScheduleCard day="یکشنبه" />
            <CreateStaffScheduleCard day="دوشنبه" />
            <CreateStaffScheduleCard day="سه شنبه" />
            <CreateStaffScheduleCard day="چهار شنبه" />
            <CreateStaffScheduleCard day="پنج شنبه" />
            <CreateStaffScheduleCard day="جمعه" />
        </motion.div>
    );
});
