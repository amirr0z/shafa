import React, { useRef, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Image from "./Image";

export default function CreateService() {
    const [image, setImage] = useState(null);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [interval, setInterval] = useState("");

    return (
        <>
            <div className="flex xl:flex-row flex-col w-full justify-around items-center gap-5">
                <div className="w-80 h-80">
                    <Image image={image} setImage={setImage} />
                </div>
                <div className="w-8/12 flex flex-col gap-5">
                    <Input
                        value={title}
                        label="عنوان"
                        setValue={setTitle}
                        type="text"
                    />
                    <Input
                        value={category}
                        label="دسته"
                        setValue={setCategory}
                        type="select"
                        options={["روان", "پوست"]}
                    />
                    <Input
                        value={time}
                        label="زمان"
                        setValue={setTime}
                        type="number"
                    />
                    <Input
                        value={interval}
                        label="بازه"
                        setValue={setInterval}
                        type="number"
                    />
                </div>
            </div>
            <div className="w-full flex xl:justify-end justify-center p-4 px-10">
                <Button name="تایید" action={() => {}} />
            </div>
        </>
    );
}
