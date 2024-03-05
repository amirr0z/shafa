import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function Image({ setImage, image }) {
    const imageInputRef = useRef();
    const imageRef = useRef();
    const svgImageRef = useRef();

    const imageInputHandler = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            svgImageRef.current.style.display = "none";
            imageRef.current.style.display = "block";
        }
    };
    const imageInputTrigger = (event) => {
        imageInputRef.current.click();
    };

    return (
        <motion.div
            className="w-full min-w-full h-full border border-zinc-500 rounded-xl flex items-center justify-center overflow-hidden"
            onClick={imageInputTrigger}
            whileTap={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "linear" }}
        >
            <svg
                viewBox="0 0 1024 1024"
                fill="#71717A"
                height="4em"
                width="4em"
                ref={svgImageRef}
            >
                <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zM338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm513.9 437.1a8.11 8.11 0 01-5.2 1.9H177.2c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l99.4 118 158.1-187.5c2.8-3.4 7.9-3.8 11.3-1 .3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2z" />
            </svg>
            <input
                type="file"
                hidden
                ref={imageInputRef}
                onChange={imageInputHandler}
                accept="image/*"
            />
            <img
                src={image}
                alt=""
                ref={imageRef}
                className="w-full h-full object-cover"
                style={{ display: "none" }}
            />
        </motion.div>
    );
}
