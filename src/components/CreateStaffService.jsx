import React, { forwardRef } from "react";
import CreateStaffServiceCard from "./CreateStaffServiceCard";
import { motion } from "framer-motion";

export default forwardRef(function CreateStaffService(props, ref) {
    return (
        <motion.div
            ref={ref}
            className="min-w-full flex flex-wrap gap-6 justify-around"
            initial={{ x: "-100%" }}
            exit={{ x: "100%" }}
            animate={{ x: "0" }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <CreateStaffServiceCard title={"مراقبت پوست"} />
            <CreateStaffServiceCard title={"اضطراب"} />
            <CreateStaffServiceCard title={"روان"} />
            <CreateStaffServiceCard title={"داخلی"} />
            <CreateStaffServiceCard title={"ازمایش خون"} />
            <CreateStaffServiceCard title={"ازمایش اعتیاد"} />
            <CreateStaffServiceCard title={"ویروسی"} />
            <CreateStaffServiceCard title={"انگل"} />
            <CreateStaffServiceCard title={"مشاوره"} />
            <CreateStaffServiceCard title={"سلامت"} />
            <CreateStaffServiceCard title={"فیزیو"} />
            <CreateStaffServiceCard title={"ریه"} />
            <CreateStaffServiceCard title={"قلب"} />
            <CreateStaffServiceCard title={"مغز"} />
            <CreateStaffServiceCard title={"اعصاب"} />
        </motion.div>
    );
});
