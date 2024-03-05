import React, { forwardRef } from "react";
import Image from "./Image";
import Input from "./Input";
import { motion } from "framer-motion";

export default forwardRef(function CreateStaffDetails(props, ref) {
    const {
        image,
        setImage,
        name,
        setName,
        password,
        setPassword,
        phone,
        setPhone,
        bd,
        setBd,
        resident,
        setResident,
        sexuality,
        setSexuality,
        idnumber,
        setIdnumber,
        email,
        setEmail,
        address,
        setAddress,
        info,
        setInfo,
    } = { ...props };
    return (
        <motion.div
            ref={ref}
            className="flex flex-col flex-grow min-w-full items-center justify-center overflow-hidden gap-6"
            initial={{ x: "-100%" }}
            exit={{ x: "100%" }}
            animate={{ x: "0" }}
            transition={{
                duration: 1,
                ease: "backInOut",
            }}
        >
            <div className="flex w-full xl:flex-row flex-col items-center gap-6">
                <div className="w-40 h-40">
                    <Image image={image} setImage={setImage} />
                </div>
                <div className="flex flex-col flex-grow xl:w-max w-full gap-6">
                    <Input
                        label="نام کامل"
                        type="text"
                        value={name}
                        setValue={setName}
                    />
                    <Input
                        label="رمز"
                        type="password"
                        value={password}
                        setValue={setPassword}
                    />
                </div>
            </div>
            <div className="flex w-full xl:flex-row flex-col items-center gap-6">
                <div className="flex flex-col items-center xl:w-1/2 w-full gap-6">
                    <Input
                        label="شماره"
                        type="number"
                        value={phone}
                        setValue={setPhone}
                    />
                    <Input
                        label="شماره خانه"
                        type="number"
                        value={resident}
                        setValue={setResident}
                    />
                    <Input
                        label="تاریخ تولد"
                        type="date"
                        value={bd}
                        setValue={setBd}
                    />
                </div>
                <div className="flex flex-col items-center xl:w-1/2 w-full gap-6">
                    <Input
                        label="کدملی"
                        type="number"
                        value={idnumber}
                        setValue={setIdnumber}
                    />
                    <Input
                        label="جنسیت"
                        type="select"
                        options={["مرد", "زن"]}
                        value={sexuality}
                        setValue={setSexuality}
                    />
                    <Input
                        label="ایمیل"
                        type="email"
                        value={email}
                        setValue={setEmail}
                    />
                </div>
            </div>
            <Input
                label="آدرس"
                type="text"
                value={address}
                setValue={setAddress}
            />
            <Input
                label="اطلاعات"
                type="text"
                value={info}
                setValue={setInfo}
            />
        </motion.div>
    );
});
