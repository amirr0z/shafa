import React, { useState } from "react";
import Input from "./Input";

export default function Attendee() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [resident, setResident] = useState("");
    const [address, setAddress] = useState("");
    const [idnumber, setIdnumber] = useState("");
    const [sessions, setSessions] = useState("");
    return (
        <div className="w-full flex-grow flex xl:flex-row flex-col gap-6">
            <div className="xl:w-1/2 w-full flex flex-col gap-6">
                <Input
                    value={name}
                    label="نام"
                    setValue={setName}
                    type="text"
                />
                <Input
                    value={phone}
                    label="شماره"
                    setValue={setPhone}
                    type="text"
                />
                <Input
                    value={address}
                    label="آدرس"
                    setValue={setAddress}
                    type="text"
                />
            </div>
            <div className="xl:w-1/2 w-full flex flex-col gap-6">
                <Input
                    value={resident}
                    label="شماره خانه"
                    setValue={setResident}
                    type="text"
                />
                <Input
                    value={idnumber}
                    label="کدملی"
                    setValue={setIdnumber}
                    type="text"
                />
                <Input
                    value={sessions}
                    label="جلسات"
                    setValue={setSessions}
                    type="number"
                />
            </div>
        </div>
    );
}
