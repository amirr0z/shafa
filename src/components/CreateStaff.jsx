import React, { useRef, useState } from "react";
import CreateStaffDetails from "./CreateStaffDetails";
import CreateStaffService from "./CreateStaffService";
import CreateStaffSchedule from "./CreateStaffSchedule";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

export default function CreateStaff() {
    const [tab, setTab] = useState("details");
    const detailsRef = useRef(null);
    const scheduleRef = useRef(null);
    const serviceRef = useRef(null);

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [bd, setBd] = useState("");
    const [resident, setResident] = useState("");
    const [sexuality, setSexuality] = useState("");
    const [idnumber, setIdnumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [info, setInfo] = useState("");

    return (
        <div className="w-full flex-grow flex xl:flex-row flex-col items-center justify-center p-4 gap-10">
            <div className="flex xl:flex-col flex-row xl:gap-24 items-center justify-around xl:w-min w-full text-zinc-600 text-xl">
                <button
                    onClick={(e) => setTab("details")}
                    className={
                        tab == "details"
                            ? "p-2 rounded-xl  bg-white/5 backdrop-blur-sm"
                            : ""
                    }
                >
                    جزییات
                </button>
                <button
                    onClick={(e) => setTab("service")}
                    className={
                        tab == "service"
                            ? "p-2 rounded-xl  bg-white/5 backdrop-blur-sm"
                            : ""
                    }
                >
                    خدمات
                </button>
                <button
                    onClick={(e) => setTab("schedule")}
                    className={
                        tab == "schedule"
                            ? "p-2 rounded-xl  bg-white/5 backdrop-blur-sm"
                            : ""
                    }
                >
                    برنامه
                </button>
            </div>
            <motion.div
                layout
                className="flex flex-row flex-grow xl:w-max w-full  text-zinc-600 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden p-10"
            >
                <AnimatePresence mode="popLayout">
                    {tab == "details" ? (
                        <CreateStaffDetails
                            ref={detailsRef}
                            key="details"
                            props={{
                                image: image,
                                name: name,
                                password: password,
                                phone: phone,
                                bd: bd,
                                resident: resident,
                                sexuality: sexuality,
                                idnumber: idnumber,
                                email: email,
                                address: address,
                                info: info,
                                setImage: setImage,
                                setName: setName,
                                setPassword: setPassword,
                                setPhone: setPhone,
                                setBd: setBd,
                                setResident: setResident,
                                setSexuality: setSexuality,
                                setIdnumber: setIdnumber,
                                setEmail: setEmail,
                                setAddress: setAddress,
                                setInfo: setInfo,
                            }}
                        />
                    ) : tab == "service" ? (
                        <CreateStaffService key="service" ref={serviceRef} />
                    ) : tab == "schedule" ? (
                        <CreateStaffSchedule key="schedule" ref={scheduleRef} />
                    ) : (
                        ""
                    )}
                </AnimatePresence>
            </motion.div>
            <Button action={() => {}} name=">" />
        </div>
    );
}
